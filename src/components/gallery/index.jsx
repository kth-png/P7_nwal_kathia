import FlatCard from '../flatCard'

function Gallery({logements}) {
  return (
    <div className="gallery-container">
      {logements.map((flat) => (
        <FlatCard id={flat.id} cover={flat.cover} title={flat.title} key={flat.id}/>
      ))}
    </div>
  )
}

export default Gallery
