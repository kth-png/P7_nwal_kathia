import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function FlatCard(logement) {
  return (
    <Link to={`/flat/${logement.id}`} className="acc-card" id={logement.id}>
      <img src={logement.cover} alt="" className="acc-cover" />
      <div className="acc-card-text">
        <span className="acc-card-title">{logement.title}</span>
      </div>
    </Link>
  )
}
FlatCard.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
}
