import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    let date = new Date();
    return (
        <div className='footer'>
            <p>© {date.getFullYear()} Saikat Samanta JGEC IT</p>
            <div className="social">
                <Link target="_blank" style={{ color: "#000", textDecoration: "none" }} to='https://github.com/psykat1116'>Github</Link>
                <Link target="_blank" style={{ color: "#000", textDecoration: "none" }} to='https://www.linkedin.com/in/saikat-samanta-766041226'>Linkedin</Link>
                <Link target="_blank" style={{ color: "#000", textDecoration: "none" }} to='https://cssbattle.dev/player/psykat_1611'>CssBattle</Link>
                <Link target="_blank" style={{ color: "#000", textDecoration: "none" }} to='https://codepen.io/psykat1611'>Codepen</Link>
            </div>
        </div>
    )
}

export default Footer