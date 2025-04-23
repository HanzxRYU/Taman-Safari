import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './project/home'
import Navbar from './project/book'


// import Home from './project/home.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
