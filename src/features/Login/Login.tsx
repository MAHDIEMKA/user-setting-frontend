import {useState} from 'react'
import axios from 'axios';

export default function Login() {
  
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");


  const handelSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post("https://localhost:7112/api/login", {userName, password});
      alert(res.data.message)
    }catch (error){
      console.error("error koli back",error);
    }
    
  };

  
  return (
    <div className="flex items-center justify-center h-screen">
      <form  className="p-6 rounded-lg shadow-md bg-white w-80">
        <h2 className="text-xl font-bold mb-4">login</h2>
        <input
          type="text"
          placeholder="UserName"
          className="border p-2 w-full mb-3 rounded"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600" onClick={handelSubmit}>Login</button>
      </form>
    </div>
  )
}
