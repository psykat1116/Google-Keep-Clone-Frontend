import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NoteContext from '../Context/noteContext';

const Login = () => {
  const url = `http://localhost:5000/api/auth/login`;
  let Navigate = useNavigate();
  const context = useContext(NoteContext);
  const { setLogin } = context;
  const [data, setdata] = useState({
    email: "",
    password: "",
  })
  const [errormsg, seterrormsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { email, password } = data;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({ email, password })
    })
    const json = await response.json();
    if (json.success) {
      setLogin(true);
      localStorage.setItem('token', json.authToken);
      Navigate('/mynotes');
    }
    else {
      if(json.errors[0].path === "email"){
        seterrormsg("**Enter a valid email")
      }
    }
  }

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <div id='login'>
      <div className="container">
        <h2>Login</h2>
        <div id="email">
          <label>Email</label>
          <input type='email' name="email" placeholder='Enter Your Email' autoFocus value={data.email} onChange={handleChange} required />
          <small>{errormsg}</small>
        </div>
        <div id="password">
          <label>Password</label>
          <input type='password' name='password' placeholder='Enter Your Password' value={data.password} onChange={handleChange} required />
        </div>
        <p>Don't have an account? <Link to='/signup'>Sign in</Link></p>
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  )
}

export default Login