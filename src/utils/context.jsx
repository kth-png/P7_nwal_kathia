import { createContext, useState } from 'react'

export const AccContext = createContext()

export const AccProvider = ({ children }) => {
  const [isSelected, setIsSelected] = useState(false)
  const toRender = () => {
    setIsSelected(true)
  }
  return (
    <AccContext.Provider value={{ isSelected, toRender }}>
      {children}
    </AccContext.Provider>
  )
}
