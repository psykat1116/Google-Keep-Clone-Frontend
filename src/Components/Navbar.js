import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom';
import NoteContext from '../Context/noteContext';

const Navbar = () => {
    const context = useContext(NoteContext);
    const { login, setLogin } = context;

    function handleLogout() {
        setLogin(false);
        localStorage.removeItem("token");
    }

    return (
        <>
            <div id='nav'>
                <Link to="/"><h1>Google Keep</h1></Link>
                <div className="btn">
                    {login ?
                        <>
                            <Link to='/mynotes'><button>My Notes</button></Link>
                            <Link to='/login' onClick={handleLogout}><button>Logout</button></Link>
                        </>
                        :
                        <>
                            <Link to='/login'><button>Login</button></Link>
                            <Link to='/signup'><button>Sign Up</button></Link>
                        </>
                    }
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar