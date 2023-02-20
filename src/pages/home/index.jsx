//import '../../styles/home.css'
import { useLoaderData } from 'react-router-dom'
import Gallery from '../../components/gallery'
import HomeBanner from '../../components/HomeBanner/HomeBanner'

export default function Home() {
  const data = useLoaderData()
  return (
    <div>
      <HomeBanner />
      <Gallery logements={data} />
    </div>
  )
}
