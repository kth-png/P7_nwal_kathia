import FlatCard from '../flatCard'

function Gallery({ logements }) {
  return (
    <div className="gallery-container">
      {logements.map((prop) => (
        <FlatCard
          key={prop.id}
          cover={prop.cover}
          title={prop.title}
          id={prop.id}
        />
      ))}
    </div>
  )
}

export default Gallery
