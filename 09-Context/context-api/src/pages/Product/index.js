import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

export default function Product() {
  const { id } = useParams()
  const url = 'http://localhost:3000/products/' + id
  const { data: product, loading, error } = useFetch(url)
  return (
    <>
      <p>Id Do Produto: {id}</p>
      {error && <p>{error}</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R$:{product.price}</p>
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}
    </>
  )
}