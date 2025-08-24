import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './index.css'; // or './App.css' if that's where you added Tailwind
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MoreProduct from './MoreProduct.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
