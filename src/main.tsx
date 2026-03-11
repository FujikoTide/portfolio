import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Card from './components/ui/Card.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Card />
    <div className='divider w-full max-w-4xl mx-auto'></div>
    <Card />
  </StrictMode>,
)
