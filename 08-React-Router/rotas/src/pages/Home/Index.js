import { Link } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

import './Style.css'
import { url } from '../../services/url'

const Home = () => {

  const { data: items, loading, error } = useFetch(url)

  return (
    <div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      {loading && <p>Carregando...</p>}
      <ul className='products'>
        {items &&
          items.map(item => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$: {item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  )
}
export default Home