import { useLoaderData } from 'react-router-dom'
import Carroussel from '../../components/Carroussel/Carroussel'
import Host from '../../components/Host/Host'
import Rate from '../../components/Rate/Rate'
import Collapse from '../../components/Collapse'
import TagCard from '../../components/TagCard/TagCard'

export default function Flat() {
  const { logement } = useLoaderData() //Récupère les données du logement grace au hook useLoader
  const { host } = logement //Récupère les infos de l'host dans les données du logement
  const { pictures } = logement //Récupère les images dans les données du logement
  const { equipments } = logement //Récupère la liste d'équipements dans les données du logement
  const equipment =
    logement &&
    equipments.map((item, index) => (
      <li key={index} className="equipList">
        {item}
      </li>
    )) //Map chaque équipement dans un élément de liste

  return (
    logement && (
      <main className="flat-container">
        <Carroussel slides={pictures} />
        <section className="hostCard-container">
          <div className="flatInfos-container">
            <div className="title-container redText">
              <h2>{logement.title}</h2>
              <h3>{logement.location}</h3>
            </div>
            <TagCard tags={logement.tags} />
          </div>
          <div className="profile-container">
            <div className="profile redText">
              <Host hostName={host.name} hostPicture={host.picture} />
            </div>
            <div className="rate-container">
              <Rate score={logement.rating} />
            </div>
          </div>
        </section>
        <div className="collapse-fiche-container">
          <Collapse aboutTitle="Description" aboutText={logement.description} />
          <Collapse aboutTitle="Équipements" aboutText={equipment} />
        </div>
      </main>
    )
  )
}
