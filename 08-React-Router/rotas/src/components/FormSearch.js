import { useNavigate } from 'react-router-dom'

import { useState } from 'react'


export default function FormSearch() {
  const navigate = useNavigate()

  const [query, setQuery] = useState()

  function handleSubmit(e) {
    e.preventDefault()

    navigate(`/search?q=` + query)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <input type="submit" value='Buscar' />
    </form>
  )
}