import flats from '../../datas/logements.json'
import FlatCard from '../flatCard'

function Gallery() {
  return (
    <div className="gallery-container">
      {flats.map((prop) => (
        <FlatCard key={prop.id} cover={prop.cover} title={prop.title} />
      ))}
    </div>
  )
}

export default Gallery
