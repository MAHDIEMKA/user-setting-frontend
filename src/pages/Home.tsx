
import './Home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();

    navigate("login");
  }
  
  
  return (
    <div className="main">
      <div className="container">
        <h1>صفحه مدیریت کاربران</h1>
        <button onClick={handelSubmit}>ورود</button>
      </div>
    </div>
  )
}
