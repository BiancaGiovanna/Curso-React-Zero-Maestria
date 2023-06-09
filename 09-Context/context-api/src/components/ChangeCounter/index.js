import { useContext } from 'react'

import { CounterContext } from '../../context/CounterContext'

export default function ChangeCounter() {
  const { counter, setCounter } = useContext(CounterContext)

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Add value to counter
      </button>
    </div>
  )
}