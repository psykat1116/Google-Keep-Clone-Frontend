
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NoteContext from '../Context/noteContext';

const Logout = () => {
  const Navigate = useNavigate();
  const context = useContext(NoteContext);
  const { setLogin, getUserData } = context;
  const [password, setpassword] = useState("");

  const handleLogout = async (e) => {
    e.preventDefault();
    let user = await getUserData(password);
    if (user === true) {
      setLogin(false);
      localStorage.removeItem('token');
      Navigate('/');
    }
    else {
      alert("You Are A Criminal");
    }
  }

  const handleChange = (e) => {
    setpassword(e.target.value);
  }

  return (
    <div id='logout'>
      <div className="container">
        <h3> Please Enter Your Password To Authenticate Yourself and Logout</h3>
        <div id="password">
          <label>Password</label>
          <input type='password' name='checkpass' placeholder='Enter Your Password' value={password} onChange={handleChange} />
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Logout