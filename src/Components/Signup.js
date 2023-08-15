import React, { useState, useContext } from 'react'
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import NoteContext from '../Context/noteContext';

const Signup = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  })
  const context = useContext(NoteContext);
  const { setLogin } = context;

  const Navigate = useNavigate();
  const { name, email, password, cpassword } = data;

  function handleChange(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }

  async function handleClick(e) {
    e.preventDefault();
    const url = `http://localhost:5000/api/auth/signup`;
    if (password !== cpassword) {
      return;
    }
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
    const json = await response.json();
    if (json.success) {
      setLogin(true);
      localStorage.setItem('token', json.authToken);
      Navigate('/');
    }
    else {
      alert("Rom Rom Bhaiyo,System Phar Denge");
    }
  }

  return (
    <div id='signup'>
      <div className="container">
        <h2>Create a new account</h2>
        <div id="name">
          <label>Name</label>
          <input type='text' name="name" placeholder='Enter Your Name' autoFocus onChange={handleChange} required />
          <small>{data.name.length >= 3 ? "" : "**name should be of atleast 3 characters"}</small>
        </div>
        <div id="email">
          <label>Email</label>
          <input type='email' name="email" placeholder='Enter Your Email' onChange={handleChange} required />
        </div>
        <div id="password">
          <label>Password</label>
          <input type='password' name='password' placeholder='Enter Your Password' onChange={handleChange} required />
          <small>{data.password.length >= 6 ? "" : "**password should be of atleast 6 characters"}</small>
        </div>
        <div id="cpassword">
          <label>Confirm Password</label>
          <input type='password' name="cpassword" placeholder='Retype Your Password' onChange={handleChange} required />
          <small>{data.cpassword === data.password ? "" : "**password and confirm password does not match"}</small>
        </div>
        <p>Already Have an account ? <Link to='/login'>Login</Link></p>
        <button type='submit' onClickCapture={handleClick} disabled={data.name.length < 3 || data.password.length < 6 || data.cpassword !== data.password}>Sign In</button>
      </div>
    </div>
  )
}

export default Signup