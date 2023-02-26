import { useLoaderData } from 'react-router-dom'
import Carroussel from '../../components/Carroussel/Carroussel'
import Collapse from '../../components/Collapse'
import FlatCard from '../../components/flatCard'
import aboutDatas from '../../datas/About.json'

function Tag() {
  const { tag, tags } = useLoaderData()
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
            />{' '}
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
          <Collapse
            aboutTitle="Équipements"
            aboutText={printedTag.equipments}
            className="item-tag__collapse"
          />
        </div>
        {aboutDatas.map((rule, id) => (
          <Collapse
            key={id}
            aboutTitle={rule.aboutTitle}
            aboutText={rule.aboutText}
            aboutStyle="about-style"
            className="item-tag__collapse"
          />
        ))}
      </div>
      <Carroussel slides={pictures} />
    </main>
  )
}

export default Tag
