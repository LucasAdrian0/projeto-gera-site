import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'; // Arquivo CSS para estilização

const NavBar = () => {
  return (
    <div className='navbar-container'>
        <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <Link to="/">Gerador de Site</Link>
          </li>
          <li>
            <Link to="/Login">
              <button className="login-button">Login</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar