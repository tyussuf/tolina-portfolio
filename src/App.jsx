import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import WorkPage from './pages/WorkPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import CaseStudyAfaanArcadePage from './pages/CaseStudyAfaanArcadePage.jsx'
import CaseStudyOdysseyPage from './pages/CaseStudyOdysseyPage.jsx'
import CaseStudyBluePrintPage from './pages/CaseStudyBluePrintPage.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/case-study/afaan-arcade" element={<CaseStudyAfaanArcadePage />} />
          <Route path="/case-study/odyssey" element={<CaseStudyOdysseyPage />} />
          <Route path="/case-study/blueprint" element={<CaseStudyBluePrintPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
