import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './calendar/calendar.css'
import { BrowserRouter } from 'react-router'
import './translation/config/i18n.ts'
import { Toaster } from 'sonner'
import {
  CheckCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  XCircleIcon,
} from 'lucide-react'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
    <Toaster
      icons={{
        error: <XCircleIcon className='text-red-500' />,
        success: <CheckCheckIcon className='text-green-500' />,
        info: <InfoIcon className='text-blue-500' />,
        warning: <TriangleAlertIcon className='text-yellow-500' />,
      }}
    />
  </BrowserRouter>
)
