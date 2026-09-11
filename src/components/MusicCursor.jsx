import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const NOTES = ['♪', '♫', '♬']
const SPARKLES = ['✦', '✧', '·']
let particleId = 0

export default function MusicCursor() {
  const [enabled, setEnabled] = useState(false)
  const [particles, setParticles] = useState([])
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 320, damping: 24, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 320, damping: 24, mass: 0.5 })
  const rotate = useSpring(0, { stiffness: 200, damping: 14 })
  const lastSpawn = useRef(0)

  useEffect(() => {
    const canHover = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reduced) return undefined

    document.body.classList.add('has-note-cursor')
    setEnabled(true)

    let lastX = window.innerWidth / 2

    function handleMove(event) {
      x.set(event.clientX)
      y.set(event.clientY)
      rotate.set((event.clientX - lastX) * 1.4)
      lastX = event.clientX

      const now = performance.now()
      if (now - lastSpawn.current > 70) {
        lastSpawn.current = now
        const id = particleId++
        const glyph = SPARKLES[id % SPARKLES.length]
        setParticles((prev) => [
          ...prev.slice(-14),
          {
            id,
            glyph,
            x: event.clientX + (Math.random() * 16 - 8),
            y: event.clientY + (Math.random() * 16 - 8),
          },
        ])
        setTimeout(() => {
          setParticles((prev) => prev.filter((p) => p.id !== id))
        }, 650)
      }
    }

    window.addEventListener('mousemove', handleMove)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.body.classList.remove('has-note-cursor')
    }
  }, [rotate, x, y])

  if (!enabled) return null

  return (
    <>
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="music-cursor__sparkle"
          style={{ left: particle.x, top: particle.y }}
          initial={{ opacity: 1, scale: 1, y: 0 }}
          animate={{ opacity: 0, scale: 0.3, y: 22 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          aria-hidden="true"
        >
          {particle.glyph}
        </motion.span>
      ))}

      <motion.span
        className="music-cursor music-cursor--lead"
        style={{ x: springX, y: springY, rotate }}
        aria-hidden="true"
      >
        {NOTES[0]}
      </motion.span>
      <motion.span
        className="music-cursor music-cursor--trail"
        style={{ x: springX, y: springY }}
        aria-hidden="true"
      >
        {NOTES[1]}
      </motion.span>
    </>
  )
}
