import { useLoaderData } from 'react-router-dom'
import Gallery from '../../components/gallery'
import HomeBanner from '../../components/HomeBanner/HomeBanner'

export default function Home() {
  const data = useLoaderData()
  //recupère les données grace au hook useLoaderData
  return (
    <main>
      <HomeBanner />
      <Gallery logements={data} />
      {/*Passe la data en props du composant*/}
    </main>
  )
}
