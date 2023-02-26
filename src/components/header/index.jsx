import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/LOGO.png'

export default function Header() {
  return (
    <div className="header-container">
      <Link to="/" className="header-logo">
        <img src={logo} alt="logo Kasa" className="header-logo-img" />
      </Link>
      <nav className="header-nav">
        <Link to="/" className="header-nav-link-home">
          Accueil
        </Link>
        <Link to="/about" className="header-nav-link-about">
          A propos
        </Link>
      </nav>
    </div>
  )
}
