import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom';
import NoteContext from '../Context/noteContext';

const Navbar = () => {
    const context = useContext(NoteContext);
    const { login } = context;
    return (
        <>
            <div id='nav'>
                <Link to="/" style={{ "textDecoration": "none", "color": "#000" }}><h1>Google Keep</h1></Link>
                <div className="btn">
                    {login ?
                        <>
                            <Link to='/mynotes'><button>My Notes</button></Link>
                            <Link to='/logout'><button>Logout</button></Link>
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