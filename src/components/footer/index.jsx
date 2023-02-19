import logo from '../../assets/LOGO-white.png'

export default function Footer() {
  return (
    <footer className="footer-container">
      <img src={logo} alt="logo kasa" />
      <span className="footer-container__text">
        © 2020 Kasa. All rights reserved
      </span>
    </footer>
  )
}
