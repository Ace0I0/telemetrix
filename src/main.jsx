import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { TelemetryProvider } from './context/TelemetryContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TelemetryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TelemetryProvider>
  </StrictMode>,
)
