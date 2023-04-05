const Challenge = () => {
  const num1 = 3;
  const num2 = 4;
  const resultado = () => {
    return console.log(num1 + num2)
  }
  return (
    <div>
      <span>{num1}</span><br />
      <span>{num2}</span> <br />
      <button onClick={resultado}>Somar os 2 numeros </button>
    </div >
  )
}
export default Challenge