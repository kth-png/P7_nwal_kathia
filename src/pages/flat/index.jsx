import data from '../../datas/logements.json'
import { useState, useEffect } from 'react'
import { useParams, Redirect, useLoaderData } from 'react-router-dom'

function Flat() {
  const params = useParams()

  const [isSelected, setIsSelected] = useState()
  // useEffect(() => {
  //   const getData = async () => {
  //     const selectedFlat = data.find(({ id }) => id === params.id)
  //     data.map(() => setIsSelected(selectedFlat))
  //     if (selectedFlat === undefined) {
  //       ('/error')
  //     }
  //   }
  //   getData()
  // }, [])

  const { logement } = useLoaderData()

  return (
    <div className="flat-container">
      <p>Caroussel</p>
      <section className="hostCard-container">
        <div className="flatInfos-container">
          <div className="flatInfos redText">
            <h2>TITRE APPART</h2>
            <h3>LOCALISATION</h3>
          </div>
          <div className="tag-container">TAGS</div>
        </div>
        <div className="profile-container">
          <div className="profile redText">HOST NAME + PIC</div>
          <div className="rate-container">RATE</div>
        </div>
      </section>
    </div>
  )
}

export default Flat
