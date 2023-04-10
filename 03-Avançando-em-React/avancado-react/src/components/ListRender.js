import { useState } from "react"

const ListRender = () => {
  const [list] = useState(['Bianca', 'João', 'Matheus'])

  const [users, setUsers] = useState([
    { id: 1, name: 'Jose', age: 31 },
    { id: 2, name: 'Maria', age: 31 },
    { id: 3, name: 'Roberto', age: 31 },
  ])
  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4)

    setUsers((prevUsers) => {
      console.log(prevUsers)
      return prevUsers.filter((user) => randomNumber !== user.id)
    })
  }

  return (
    <div>
      <ul>
        {list.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>Nome do usuario:{user.name}
            idade do usuario: {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}
export default ListRender