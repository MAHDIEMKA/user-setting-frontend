import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App.tsx'
import Login from './features/Login/Login.tsx';
import Home from './pages/Home.tsx';
import Register from './features/Register/Register.tsx';
import 'bootstrap/dist/css/bootstrap.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="home" element={<Home/>}/>
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
