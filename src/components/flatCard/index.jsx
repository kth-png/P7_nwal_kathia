import { Link } from 'react-router-dom'

export default function FlatCard(props) {
  return (
    <Link to={`/flat/${props.id}`} className="acc-card" id={props.id}>
      <img src={props.cover} alt="" className="acc-cover" />
      <div className="acc-card-text">
        <span className="acc-card-title">{props.title}</span>
      </div>
    </Link>
  )
}
