import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import RecordShelf from '../components/RecordShelf.jsx'
import RecordDetail from '../components/RecordDetail.jsx'
import SectionMarquee from '../components/SectionMarquee.jsx'
import { records } from '../data/records.js'

export default function WorkPage() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const [selected, setSelected] = useState(null)
  const [originRect, setOriginRect] = useState(null)
  const [stage, setStage] = useState('front')
  const openTimer = useRef(null)

  function handleSelect(record, rect) {
    clearTimeout(openTimer.current)
    setOriginRect({ left: rect.left, top: rect.top, width: rect.width, height: rect.height })
    setSelected(record)
    setStage('front')
    if (slug !== record.id) navigate(`/work/${record.id}`)
  }

  function handleFrontSettled() {
    openTimer.current = setTimeout(() => {
      setStage('loading')
      openTimer.current = setTimeout(() => setStage('open'), 650)
    }, 150)
  }

  function handleClose() {
    clearTimeout(openTimer.current)
    setStage('closing')
  }

  function handleCloseSettled() {
    setSelected(null)
    setOriginRect(null)
    if (slug) navigate('/work')
  }

  // Keeps local state in sync with the URL for paths that don't go through
  // handleSelect/handleClose: a deep link straight to /work/:slug, a page
  // refresh, or the browser back/forward buttons.
  useEffect(() => {
    if (slug) {
      const alreadyOpen = selected && selected.id === slug
      if (!alreadyOpen) {
        const record = records.find((item) => item.id === slug)
        if (record) {
          clearTimeout(openTimer.current)
          setOriginRect(null)
          setSelected(record)
          setStage('front')
        }
      }
    } else if (selected && stage !== 'closing') {
      handleClose()
    }
    // Runs only when the URL's slug changes; selected/stage are read fresh, not tracked as deps.
    // oxlint-disable-next-line react-hooks/exhaustive-deps
  }, [slug])

  useEffect(() => () => clearTimeout(openTimer.current), [])

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <>
      <SectionMarquee />

      <RecordShelf records={records} onSelect={handleSelect} />

      {selected && (
        <RecordDetail
          record={selected}
          originRect={originRect}
          stage={stage}
          onFrontSettled={handleFrontSettled}
          onCloseSettled={handleCloseSettled}
          onClose={handleClose}
        />
      )}
    </>
  )
}
