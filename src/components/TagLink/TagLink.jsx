import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TagContext } from '../../utils/context'

export default function TagLink(props) {
  const { selectedTag, setSelectedState } = useContext(TagContext)
  //    const handleClick = (e) => {
  // e.preventDefault()
  //   console.log('TARGET', e.target.innerHTML)
  //  const target = e.target.innerHTML
  //  setSelectedTag(target)
  //  setSelectedState(target)
  //  }

  function handleClick(e) {
    e.preventDefault()
    setSelectedState()
    console.log('TAGLINK', selectedTag)
  }
  return (
    <Link
      onClick={handleClick}
      to={`/${selectedTag}`}
      className="tagContainer tagButton"
    >
      {props.value}
    </Link>
  )
}
