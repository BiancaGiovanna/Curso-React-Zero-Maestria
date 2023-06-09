import { useEffect, useState, useRef } from "react";

export default function HookUseRef() {
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  });

  const inputRef = useRef();
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setText("");

    inputRef.current.focus();
  }

  return (
    <div>
      <h2>Use Ref</h2>
      <p>O componente renderizou: {numberRef.current} vezes</p>
      <p>Counter 1: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Contador A</button>
      <p>Counter 2: {counterB}</p>
      <button onClick={() => setCounterB(counterB + 1)}>Contador b</button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}
