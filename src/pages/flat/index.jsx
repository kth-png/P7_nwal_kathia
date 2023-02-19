import { useLoaderData } from 'react-router-dom'
import Carroussel from '../../components/Carroussel/Carroussel'
import Host from '../../components/Host/Host'
import Rate from '../../components/Rate/Rate'
import Collapse from '../../components/Collapse'

export default function Flat() {
  const { logement } = useLoaderData()
  const slide = logement.pictures
  const tags = logement && logement.tags
  const equipments = logement && logement.equipments
  const equipment =
    logement &&
    equipments.map((item, index) => (
      <li key={index} className="equipmentList">
        {item}
      </li>
    ))
  return (
    logement && (
      <main className="flat-container">
        <Carroussel slides={slide} />
        <section className="hostCard-container">
          <div className="flatInfos-container">
            <div className="flatInfos redText">
              <h2>{logement.title}</h2>
              <h3>{logement.location}</h3>
            </div>
            <div className="tag-container">
              {tags.map((tag) => (
                <div key={tag} className="tagContainer">
                  <span className="tagButton">{tag}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="profile-container">
            <div className="profile redText">
              {' '}
              <Host
                hostName={logement.host.name}
                hostPicture={logement.host.picture}
              />
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
