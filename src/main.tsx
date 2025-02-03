import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './calendar/calendar.css'
import { BrowserRouter } from 'react-router'
import './translation/config/i18n.ts'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
