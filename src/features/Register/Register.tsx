import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';

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
      
      navigate("/");
    }catch (error: any) {
      alert(error.response?.data?.message || "نام کاربری و رمز عبور اشتباه می باشد")
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
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        bgcolor="#5a5959"
        p={2}
      >
        <button className="button-back" onClick={handleBackToHome}>بازگشت به صفحه اصلی</button>
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
          <TextField
            label="نام کاربری"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            fullWidth
            required
          />
          <TextField 
            label="ایمیل"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />
          <TextField 
            label="رمز عبور"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
          />
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
