import { useLoaderData } from 'react-router-dom'
import Carroussel from '../../components/Carroussel/Carroussel'
import Collapse from '../../components/Collapse'
import FlatCard from '../../components/flatCard'
import aboutDatas from '../../datas/About.json'

function Tag() {
  const { tag, tags } = useLoaderData()
  const spliceAboutDatas = aboutDatas.splice(2, 3)
  console.log('ABOUT', spliceAboutDatas)
  console.log('TAGS', tags)
  return (
    <main>
      <h1>{tag}</h1>
      <div className="itemTag-container">
        {tags.map((itemTag, index) => (
          <div key={`${index}-${itemTag}`} className="itemTag">
            <FlatCard cover={itemTag.cover} title={itemTag.title} />{' '}
            <div className="collapse-fiche-container">
              <Collapse
                aboutTitle="Description"
                aboutText={itemTag.description}
              />
              <Collapse
                aboutTitle="Équipements"
                aboutText={itemTag.equipments}
              />
            </div>
          </div>
        ))}
      </div>

      {aboutDatas.map((rule, id) => (
        <Collapse
          key={id}
          aboutTitle={rule.aboutTitle}
          aboutText={rule.aboutText}
          aboutStyle="about-style"
        />
      ))}
      <div>
        {tags.map((slide, index) => (
          <Carroussel key={`${slide}-${index}`} slides={slide.pictures} />
        ))}
      </div>
    </main>
  )
}

export default Tag
