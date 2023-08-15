import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Intro from './Components/Intoduction';
import Signup from './Components/Signup';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Error from './Components/Error';
import Unauthorise from './Components/Unauthorise'
import NoteState from './Context/noteState';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/mynotes' element={localStorage.getItem('token') ? <Main /> : <Unauthorise />} />
          <Route path='/Login' element={!localStorage.getItem('token') ? <Login /> : <Unauthorise />} />
          <Route path='/Signup' element={!localStorage.getItem('token') ? <Signup /> : <Unauthorise />} />
          <Route path='/Logout' element={localStorage.getItem('token') ? <Logout /> : <Unauthorise />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </NoteState >
  );
}

export default App;
