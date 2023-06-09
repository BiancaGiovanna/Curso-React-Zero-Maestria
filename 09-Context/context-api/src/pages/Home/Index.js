import ChangeCounter from '../../components/ChangeCounter'

import { useCounterContext } from '../../hooks/useCounterContext'
import { useTitleColorContex } from '../../hooks/useTitleColorContext'


const Home = () => {

  const { counter } = useCounterContext()
  const { color, dispatch } = useTitleColorContex()

  const setTitleColor = (color) => {
    dispatch({ type: color })
  }
  return (
    <>
      <h1 style={{ color: color }}>HOME</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />

      <div>
        <button onClick={() => setTitleColor('RED')}>Vermelho</button>
        <button onClick={() => setTitleColor('BLUE')}>Azul</button>
      </div>
    </>
  )
}
export default Home