import { useState } from 'react'
import { Link } from 'react-router-dom'

function TagCard(props) {
  const [selectedTag, setSelectedTag] = useState()
  // function handleClick(e) {
  //   e.preventDefault()
  //   setSelectedTag(tag)
  //   console.log(tag)
  // }

  const handleNextStep = (e) => {
    const tagOnClick = e.target.innerHTML
    setSelectedTag(tagOnClick)
    // e.preventDefault()
  }
  console.log(props)
  function TagLink(props) {
    return (
      <a
        onClick={handleNextStep}
        href={`/${props.value}`}
        className="tagContainer tagButton"
      >
        {props.value}
      </a>
    )
  }

  const tags = props.tags
  const listTags = tags.map((tag, index) => (
    <TagLink key={`${index}-${tag}`} value={tag} />
  ))
  return <div className="tags-container">{listTags}</div>
}

export default TagCard
