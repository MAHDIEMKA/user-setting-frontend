import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './Login/Login';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/Login" element={<Login name="mahdi" age={25}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
