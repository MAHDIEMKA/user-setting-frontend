import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Button, Box, Typography, Alert, Modal, CircularProgress } from '@mui/material';
import './Login.css'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function Login() {
  

  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loginMessage, setLoginMessage] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try{
      const res = await axios.post("https://localhost:7112/api/login/login", {userName, password});
      setLoginMessage(res.data.message);
      setModalOpen(true);
      
      setTimeout(() => {
        setModalOpen(false);
        navigate("/dashboard");
      },5000);
      
    }catch (error: any) {
      setErrorMessage(error.response?.data?.message || "نام کاربری و رمز عبور اشتباه می باشد");
      console.log(error.response?.data?.message);
    }finally{
      setLoading(false);
    }
    
  };

  const handleBackToHome = (e) => {
    e.preventDefault();

    navigate("/");
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  
  return (
    <div className="main-login">
      {loginMessage && (
        <Modal 
          open={modalOpen} 
          onClose={() => {setModalOpen(false)}} 
          aria-describedby="login-success-description"
          sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          mt: 2
    }}
        >
          <Box 
            sx={{
            bgcolor: '#159604',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            boxShadow: 24,
            p: 2,
            borderRadius: 2,
            mt: 2,
            minWidth: 300,
            textAlign: 'center',
      }}
          >
            <Typography id="login-success-description" sx={{ mt: 1, mb: 1 }}>
              <CheckCircleOutlineIcon color="success" sx={{ml: 6}}/>
              {loginMessage}
            </Typography>
            <CircularProgress sx={{mr: 3}}/>
          </Box>
        </Modal>
      )}
      <Box
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
        {errorMessage && (
          <Alert variant="outlined" severity="error" sx={{ mb: 3, mt: 2, fontSize: 18}}>
            {errorMessage}
          </Alert>
        )}
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
          <div className="input-container-login">
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
          <div className="input-container-login">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              required
            />
            <label htmlFor="password">رمز عبور</label>
            <span className="eye-icon" onClick={toggleShowPassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
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
