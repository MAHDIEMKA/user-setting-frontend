import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';

export default function Login() {
  

  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const handelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try{
      const res = await axios.post("https://localhost:7112/api/login", {userName, password});
      alert(res.data.message);
      
      navigate("/");
    }catch (error: any) {
      alert(error.response?.data?.message || "نام کاربری و رمز عبور اشتباه می باشد")
    }finally{
      setLoading(false);
    }
    
  };

  
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="#5a5959"
      p={2}
    >
        <Typography variant='h4' mb={2}>
          ورود به حساب کاربری
        </Typography>
        <Box
          component="form"
          onSubmit={handelSubmit}
          display="flex"
          flexDirection="column"
          gap={2}
          width={300}
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
            color="primary"
            disabled={loading}
          >
            {loading? "ورود" : "درحال ورود ..."}
          </Button>
        </Box>
    </Box>
    
    // <div className="flex items-center justify-center h-screen">
    //   <form  className="p-6 rounded-lg shadow-md bg-white w-80">
    //     <h2 className="text-xl font-bold mb-4">login</h2>
    //     <input
    //       type="text"
    //       placeholder="UserName Or Email"
    //       className="border p-2 w-full mb-3 rounded"
    //       value={userName}
    //       onChange={(e) => setUserName(e.target.value)}
    //     />
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       className="border p-2 w-full mb-3 rounded"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600" onClick={handelSubmit}>Login</button>
    //   </form>
    // </div>
  )
}
