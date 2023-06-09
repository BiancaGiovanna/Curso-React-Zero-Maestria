import { useEffect, useState } from "react";

export default function HookUseEffect() {
  const [number, setNumber] = useState(1);
  useEffect(() => {
    console.log("Estou sendo executado");
  }, []);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0)
      console.log("Sou executado apenas quando o anotherNumber muda!");
  }, [anotherNumber]);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Hello ^^");
      setAnotherNumber(anotherNumber + 1);
    }, 2000);
    return clearTimeout(timer);
  }, [anotherNumber]);
  return (
    <div>
      <h2>UseEffect</h2>
      <p>Numero: {number}</p>
      <button onClick={changeSomething}>Click</button>

      <p>Another Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Executar
      </button>
    </div>
  );
}
