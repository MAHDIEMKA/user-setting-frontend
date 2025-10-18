import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './features/Login/Login';
import Register from './features/Register/Register';
import "./App.css";
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

function App() {
  
  const theme = createTheme({
  typography: {
    fontFamily: "IranSans, Arial, sans-serif",
  },
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
  },
});

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
