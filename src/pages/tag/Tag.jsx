import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Carroussel from '../../components/Carroussel/Carroussel'
import TagCard from '../../components/TagCard/TagCard'

function Tag({ logements }) {
  //   const tagDatas = data.find((e) => (e.tags.value = tag))
  //     for (let i = 0; i < data.length; i++)
  //      { data[i].tags.includes(tag) ? data[i]: null}
  // console.log(data[i])

  // return <TagCard tags={tags} />

  const { tags } = useLoaderData()
  // const tags = logements.filter((el) => el.tags.includes(tagParams))
  console.log('TAGS', tags)
  // const [selectedTag, setSelectedTag] = useState()

  const handleNextStep = (e) => {
    // const tagOnClick = e.target.innerHTML
    // setSelectedTag(tagOnClick)
    e.preventDefault()
  }

  // function TagLink({tags}) {
  //   return (
  //     <a
  //       onClick={handleNextStep}
  //       href={`/${props.value}`}
  //       className="tagContainer tagButton"
  //     >
  //       {props.value}
  //     </a>
  //   )
  // }

  // const listTags = tags.map((tag, index) => (
  //   <TagLink key={`${index}-${tag}`} value={tag.value} />
  // ))
  // return <div className="tags-container">{listTags}</div>

  return (
    // <div className="tags-container">
    //   {tags.map((tag, index) => (
    //     <a
    //       key={`${index}-${tag}`}
    //       onClick={handleNextStep}
    //       href={`/${tag}`}
    //       className="tagContainer tagButton"
    //     >
    //       {tag.value}
    //     </a>
    //   ))}
    // </div>
    <div>
      {tags.map((tag, index) => (
        <div key={`${tag}-${index}`}>
          <h4>{tag.title}</h4>
          <Carroussel slides={tag.pictures} />
          <p>{tag.description}</p>
          {/* utliser le contexte ou l'état à partir du composant TagCard 
          lors du click sur le tag pour faire monter la valeur de l'élément 
          cliqué qui redirige vers la page tag */}
        </div>
      ))}
    </div>
  )
}

export default Tag
