import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Intro from './Components/Intoduction';
import Signup from './Components/Signup';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Error from './Components/Error';
import Unauthorise from './Components/Unauthorise'
import NoteContext from './Context/noteContext';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from 'react';

function App() {
  const { login } = useContext(NoteContext);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/mynotes' element={login ? <Main /> : <Unauthorise />} />
        <Route path='/Login' element={!login ? <Login /> : <Unauthorise />} />
        <Route path='/Signup' element={!login ? <Signup /> : <Unauthorise />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
