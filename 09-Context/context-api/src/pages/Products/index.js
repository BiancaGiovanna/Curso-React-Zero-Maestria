import { useFetch } from "../../hooks/useFetch"
import { url } from "../../services/url"
import './Style.css'
export default function Products() {

  const { data: products, loading, error } = useFetch(url)

  return (
    <div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      {loading && <p>Carregando...</p>}
      <ul className='products'>
        {products &&
          products.map(product => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>R$: {product.price}</p>
            </li>
          ))}
      </ul>
    </div>
  )
}