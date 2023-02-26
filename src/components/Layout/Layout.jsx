import Footer from '../footer'
import Header from '../header'
import { Outlet } from 'react-router-dom'
//Retourne les composants qui s'affiche quelque soit la route
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
