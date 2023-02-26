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
import Tag from './pages/tag/Tag'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route
        exact
        path="/"
        errorElement={<Error />}
        element={<Home />}
        loader={() => {
          return data
        }}
      />
      {/*Route de la page Home */}
      <Route path="about" element={<About />} /> {/*Route de la page About */}
      <Route
        path="flat/:id"
        element={<Flat />}
        errorElement={<Error />}
        loader={({ params }) => {
          const { id } = params
          if (id === undefined || id === null) throw new Error()
          const logement = data.find((l) => l.id === id)
          console.log('ROUTEUR', logement)
          if (logement === undefined || logement === null) throw new Error()
          return { logement }
        }}
      />
      {/*Route de la page flat */}
      <Route
        path="flat/tags/:tag"
        element={<Tag />}
        errorElement={<Error />}
        loader={({ params }) => {
          const { tag } = params
          if (tag === undefined || tag === null) throw new Error()
          const tags = data.filter((el) => el.tags.includes(tag))
          return { tag, tags }
        }}
      />{' '}
      {/*Route de la page Tag */}
      <Route path="*" element={<Error />} /> {/*Route de la page Error */}
    </Route>
  )
)

export default router
