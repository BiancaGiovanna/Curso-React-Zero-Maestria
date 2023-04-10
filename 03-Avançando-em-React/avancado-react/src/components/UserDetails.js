import { useState } from 'react'
function UserDetails() {
  const [users] = useState([
    { id: 1, name: 'Jose', age: 35, profissão: 'Engenheiro' },
    { id: 2, name: 'Maria', age: 18, profissão: 'Secretaria' },
    { id: 3, name: 'Roberto', age: 16, profissão: 'Estudante' },
  ])
  return (
    <div>
      {users.map((user) => (
        <>
          <ul key={user.id}>
            <li>Nome: {user.name}</li>
            <li>Idade: {user.age}</li>
            <li>Profissão: {user.profissão}</li>
            <li>Pode tirar CNH? {user.age >= 18 ? 'Sim' : 'Não'}</li>
          </ul>
        </>
      ))}
    </div>
  )
}
export default UserDetails