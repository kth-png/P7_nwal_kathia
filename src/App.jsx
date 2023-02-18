import { Switch, Route } from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'
import About from './pages/about'
import Home from './pages/home'
import Flat from './pages/flat'
import Error from './pages/error'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/flat/:id">
            <Flat />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

export default App
