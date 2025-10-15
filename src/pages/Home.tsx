
import Dashboard from './Dashboard/Dashboard';
import './Home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  
  const navigate = useNavigate();

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    navigate("login");
  }
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    navigate("register");
  }
  
  
  return (
    <div className="main">
      <Dashboard/>
      <div className="container">
        <h1>صفحه مدیریت کاربران</h1>
        <button onClick={handleSubmitLogin}>ورود</button>
        <button onClick={handleSubmitRegister}>ثبت نام</button>
      </div>
    </div>
  )
}
