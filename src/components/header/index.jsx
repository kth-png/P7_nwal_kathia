import React from 'react'
import logo from '../../assets/LOGO.png'
import '../../styles/header.css'

export default function Header() {
  return (
    <div className='header-container'>
        <img src={logo} alt="logo Kasa" />
        <nav>
            <ul>
                <li>Accueil</li>
                <li>A propos</li>
            </ul>
        </nav>
    </div>
  )
}
