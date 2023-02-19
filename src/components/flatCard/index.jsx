import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function FlatCard(prop) {
  return (
    <Link to={`/flat/${prop.id}`} className="acc-card" >
      <img src={prop.cover} alt="" className="acc-cover" />
      <div className="acc-card-text">
        <span className="acc-card-title">{prop.title}</span>
      </div>
    </Link>
  )
}
FlatCard.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
}
