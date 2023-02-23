import Footer from '../footer'
import Header from '../header'
import { Outlet } from 'react-router-dom'

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
