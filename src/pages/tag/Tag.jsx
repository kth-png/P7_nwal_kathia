import { useLoaderData } from 'react-router-dom'
import Carroussel from '../../components/Carroussel/Carroussel'
import Collapse from '../../components/Collapse'
import FlatCard from '../../components/flatCard'

function Tag() {
  const { tag, tags, aPropos } = useLoaderData()
  const pictures = tags.map((tag) => tag.pictures).flatMap((pics) => pics)
  const printedTag = tags[0]

  return (
    <main className="item-tag">
      <h1 className="item-tag__title">{tag}</h1>
      <div className="item-tag__container">
        {tags.map((itemTag, index) => (
          <div key={`${index}-${itemTag}`} className="item-tag__element">
            <FlatCard
              id={itemTag.id}
              cover={itemTag.cover}
              title={itemTag.title}
            />
            {/*Retourne une carte pour chaque logement correspondant au tag sélectionné */}
          </div>
        ))}
      </div>
      <div className="item-tag__panels">
        <div className="collapse-fiche-container">
          <Collapse
            aboutTitle="Description"
            aboutText={printedTag.description}
            className="item-tag__collapse"
          />
          {/*Retourne la description du logement à l'index 0 du tableau */}
          <Collapse
            aboutTitle="Équipements"
            aboutText={printedTag.equipments}
            className="item-tag__collapse"
          />
          {/*Retourne la liste d'équipements du logement à l'index 0 du tableau */}
        </div>
        {aPropos.map((rule, id) => (
          <Collapse
            key={id}
            aboutTitle={rule.aboutTitle}
            aboutText={rule.aboutText}
            aboutStyle="about-style"
            className="item-tag__collapse"
          />
        ))}
      </div>
      <Carroussel slides={pictures} />{' '}
      {/*Retourne toutes les photos de logements ayant le tag sélectionné*/}
    </main>
  )
}

export default Tag
