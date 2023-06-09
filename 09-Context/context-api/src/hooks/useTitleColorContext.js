import { useContext } from 'react'
import { TitleColorContext } from '../context/TitleColorContext'

export const useTitleColorContex = () => {
  const context = useContext(TitleColorContext)
  if (!context) {
    console.log("Context não encotrado")
  }
  return context;
}
