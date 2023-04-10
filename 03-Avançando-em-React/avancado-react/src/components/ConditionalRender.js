import { useState } from "react"

const ConditionalRender = () => {
  const [x] = useState(false)
  return <div>
    <h1>Isso será exibido?</h1>
    {x === true ? (<p>Se X for true, sim!</p>) : (<p>Se X for false, sim!</p>)}
  </div>
}
export default ConditionalRender