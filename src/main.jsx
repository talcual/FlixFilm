import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './assets/css/index.css'
import Peliculas from './pages/peliculas';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Flix from './pages/flix';
import Home from './pages/home';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/flix" element={<Flix />}>
          <Route index element={<Peliculas />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
