import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SSIPPitchDeck from './PPT/SSIPPitchDeck.jsx'
// import Presentation from './PPT/ProfessionalPresentation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SSIPPitchDeck />
  </StrictMode>,
)
