import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
//import { EventHandling } from './components/eventHandlimg.jsx'
//import { Practice } from './practice.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Practice /> */}
    {/* <EventHandling /> */}
  </StrictMode>,
)
