import AboutBanner from '../../components/AboutBanner'
import Collapse from '../../components/Collapse'
import aboutDatas from '../../datas/About.json'

export default function About() {
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
