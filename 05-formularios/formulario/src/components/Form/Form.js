import './Form.css'
import { useState } from 'react'

export default function Form({ user }) {
  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')

  const [bio, setBio] = useState(user ? user.bio : '')
  const [role, setRole] = useState(user ? user.role : '')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`Nome ${name}, Email ${email}, Bio: ${bio}, Cargo: ${role}`)
    setName('')
    setEmail('')
    setBio('')
    setRole('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Nome:</label>
        <input
          type="text"
          name='userName'
          placeholder="Digite o seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <label>
        <span>E-mail</span>
        <input
          type="email"
          name='email'
          placeholder="Digite o seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label >
        <span>Bio:</span>
        <textarea
          name="bio"
          placeholder='descrição do usuario'
          onChange={(e) => setBio(e.target.value)}
          value={bio}
        />
      </label>
      <label >
        <span>Função no sistema:</span>
        <select name='role' onChange={(e) => setRole(e.target.value)} value={role}>
          <option value="user">Usuário</option>
          <option value="editor">Editor</option>
          <option value="admin">Adiministrador</option>
        </select>
      </label>
      <input
        type="submit"
        value='Enviar'
      />
    </form>
  )
}