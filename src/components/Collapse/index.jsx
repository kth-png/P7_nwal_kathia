import React, { useState, useRef, useEffect } from 'react'
import vectorBas from '../../assets/vectorBas.svg'

function Collapse(props) {
  const [toggle, setToggle] = useState(false) //Défini l'état de l'élément,ici il est fermé
  const [height, setHeight] = useState() //Défini la hauteur de l'élément

  const setToggleState = () => {
    setToggle(!toggle)
  } // Change l'état actuel de l'élément,
  //si il est fermé alors ouvre le,
  //si il est fermé alors ferme

  const refHeight = useRef()

  useEffect(() => {
    setHeight(`${refHeight.current.scrollHeight}px`)
  }, [])

  return (
    <div className="collapse about-style">
      <div onClick={setToggleState} className="collapse__on">
        <h2>{props.aboutTitle}</h2>
        <img
          className={toggle ? 'chevron rotated' : 'chevron'}
          src={vectorBas}
          alt="chevron"
        />
      </div>
      <div
        ref={refHeight}
        className={toggle ? 'collapse__toggle animated' : 'collapse__toggle'}
        style={{ height: toggle ? `${height}` : '0px' }}
      >
        <p aria-hidden={toggle ? 'true' : 'false'}>{props.aboutText}</p>
      </div>
    </div>
  )
}

export default Collapse
