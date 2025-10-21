
import Dashboard from './Dashboard/Dashboard';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Home() {
  
  const navigate = useNavigate();

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    navigate("/login");
  }
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  }
  
  
  return (
    <div className="main">
      <Dashboard/>
      <div className="container">
        <h1 className="title-home">صفحه مدیریت کاربران</h1>
        <Button className="button-register" type="submit" variant="contained" onClick={handleSubmitRegister}>ثبت نام</Button>
        <Button className="button-login" type="submit" variant="contained" onClick={handleSubmitLogin}>ورود</Button>
      </div>
    </div>
  )
}
