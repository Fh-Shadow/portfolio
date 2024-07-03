import React from 'react'
import Logo from './Logo'
import '../../styles/Nav.css'

const Nav = () => {
    return (
        <nav className="nav">
            <Logo />
            <ul className="navList">
                <li className="navItem"><a href="#hello-there">Hello There</a></li>
                <li className="navItem"><a href="#my-skills">My Skills</a></li>
                <li className="navItem"><a href="#projects">Projects</a></li>
                <li className="navItem"><a href="#meet-me">Meet Me</a></li>
            </ul>
        </nav>
    )
}

export default Nav