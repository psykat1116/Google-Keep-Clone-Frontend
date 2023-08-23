import React from 'react'
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaCss3, FaCodepen,FaGithub } from 'react-icons/fa'

const Footer = () => {
    let date = new Date();
    return (
        <div className='footer'>
            <p>© {date.getFullYear()} Saikat Samanta JGEC IT</p>
            <div className="social">
                <Link target="_blank" to='https://github.com/psykat1116'><FaGithub /></Link>
                <Link target="_blank" to='https://www.linkedin.com/in/saikat-samanta-766041226'><FaLinkedinIn /></Link>
                <Link target="_blank" to='https://cssbattle.dev/player/psykat_1611'><FaCss3 /></Link>
                <Link target="_blank" to='https://codepen.io/psykat1611'><FaCodepen /></Link>
            </div>
        </div>
    )
}

export default Footer