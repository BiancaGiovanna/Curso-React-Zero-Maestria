
import './App.css';

import { useState } from 'react'
import { useFetch } from './hooks/useFetch'

const url = 'http://localhost:3000/products'

function App() {


  const { data: itens, httpConfig, loading, error } = useFetch(url)

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    }
    httpConfig(product, "POST")
    setName('')
    setPrice('')
  }

  const handleRemove = (id) => {
    httpConfig(id, 'DELETE')
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!loading && (
        <ul >
          {itens && itens.map((product) => (
            <li key={product.id}>Nome: {product.name} - Preço: R${product.price}
              <button onClick={() => handleRemove(product.id)}>Deletar</button>
            </li>
          ))}
        </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit} >
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name={name}
              id='input-name'
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name={price}
              id='input-price'
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </label>
          {loading ?
            <button disabled={true}>Aguarde</button>
            :
            !loading && <button>Cadastrar</button>
          }
        </form>
      </div>
    </div >
  );
}

export default App;
