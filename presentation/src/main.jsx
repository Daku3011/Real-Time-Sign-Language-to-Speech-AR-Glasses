import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Presentation from './PPT/ProfessionalPresentation.jsx'
// import SlideGuide from './PPT/ssip_presentation_guide.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Presentation />
    {/* <SlideGuide /> */}
  </StrictMode>,
)
