import { Link } from 'react-router-dom'

function TagCard(props) {
  //const [selectedTag, setSelectedTag] = useState()

  const tags = props.tags
  const listTags = tags.map((tag, index) => (
    <Link
      className="tagContainer tagButton"
      key={`${index}-${tag}`}
      to={`/${tag}`}
    >
      {tag}
    </Link>
  ))
  return <div className="tags-container">{listTags}</div>
}

export default TagCard
