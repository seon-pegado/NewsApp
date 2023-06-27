import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <h3>GET DAILY NEWS</h3>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-5">
            <Link className="nav-link" aria-current="page" to="/">INDIA</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to ="/sports">SPORTS</Link>
            </li>
        </ul>
        </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
