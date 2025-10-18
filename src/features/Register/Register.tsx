import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Box, Typography} from '@mui/material';
import "./Register.css";

export default function Register() {
  
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  


  const handelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try{
      const res = await axios.post("https://localhost:7112/api/login/register", {userName, email, password});
      alert(res.data.message);
      
      navigate("/login");
    }catch (error: any) {
      alert(error.response?.data?.message || "خطا در ثبت نام")
      console.log(error);
    }finally{
      setLoading(false);
    }
    
  };

  const handleBackToHome = (e) => {
    e.preventDefault();

    navigate("/");
  }
  
  
  
  return (
    <div className="main-login">
      <Box
        className="box"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        bgcolor="#5a5959"
        p={2}
      >
        <Button className="button-back" type="submit" variant="contained" onClick={handleBackToHome} sx={{position:"absolute", top:16, left:16}}>بازگشت به صفحه اصلی</Button>
        <Typography variant='h4' mb={2}>
          ورود به حساب کاربری
        </Typography>
        <Box
          component="form"
          onSubmit={handelSubmit}
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          gap={2}
          width={350}
          height={350}
          p={3}
          bgcolor="#fff"
          borderRadius={2}
          boxShadow={3}
        >
          <div className="input-container-register">
            <input
              type="text"
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder=" "
              required
            />
            <label htmlFor="username">نام کاربری</label>
          </div>
          <div className="input-container-register">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              required
            />
            <label htmlFor="email">ایمیل</label>
          </div>
          <div className="input-container-register">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              required
            />
            <label htmlFor="password">رمز عبور</label>
          </div>
          <Button
            type="submit"
            variant="contained"
            style={{height: "50px", borderRadius: "10px"}}
            color="primary"
            disabled={loading}
          >
            {loading? "درحال ورود ..." : "ورود"}
          </Button>
        </Box>
      </Box>
    </div>
  )
}
