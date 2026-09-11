import SectionMarquee from '../components/SectionMarquee.jsx'
import FolderStack from '../components/FolderStack.jsx'

export default function AboutPage() {
  return (
    <div className="about-page">
      <SectionMarquee phrase="ABOUT ME · " />

      <div className="mx-auto max-w-[1200px] px-6 py-6">
        <FolderStack />
      </div>
    </div>
  )
}
