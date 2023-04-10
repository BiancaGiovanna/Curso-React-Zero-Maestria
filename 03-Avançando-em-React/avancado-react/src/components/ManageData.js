import { useState } from 'react'

const ManageData = () => {
  const [number, setNumber] = useState(15)
  const someData = 10;

  return (
    <div>
      <p>Valor: {someData}</p>
      <button >Modificar valor</button>
      <p>Valor: {number}</p>
      <button onClick={() => setNumber(25)}>Modificar valor</button>
    </div>
  )
}

export default ManageData