import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from 'react-router-dom'

import About from './pages/about'
import Home from './pages/home'
import Flat from './pages/flat'
import Error from './pages/error'
import Layout from './components/Layout/Layout'
import data from './datas/logements.json'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route
        exact
        path="/"
        element={<Home />}
        loader={() => {
          return data
        }}
      />
      <Route path="/about" element={<About />} />
      <Route
        path="/flat/:id"
        element={<Flat />}
        errorElement={<Error />}
        loader={({ params }) => {
          const { id } = params
          if (id === undefined || id === null) throw new Error()
          const logement = data.find((l) => l.id === id)
          if (logement === undefined || logement === null) throw new Error()
          return { logement }
        }}
      />
      <Route path="*" element={<Error />} />
    </Route>
  )
)

export default router
