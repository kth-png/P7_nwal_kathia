import { useLoaderData } from 'react-router-dom'
import AboutBanner from '../../components/AboutBanner'
import Collapse from '../../components/Collapse'

export default function About() {
  const { aboutDatas } = useLoaderData()
  return (
    <main>
      <AboutBanner />
      {aboutDatas.map((rule, id) => (
        <Collapse
          key={id}
          aboutTitle={rule.aboutTitle}
          aboutText={rule.aboutText}
          aboutStyle="about-style"
        />
      ))}{' '}
      {/*Retrourne un composant pour chaque élément du tableau aboutDatas */}
    </main>
  )
}
