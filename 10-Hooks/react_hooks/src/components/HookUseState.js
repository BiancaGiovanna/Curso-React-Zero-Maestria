import { useEffect, useState } from "react";

const HookUseState = () => {
  let userName = "João";

  const [name, setName] = useState("Bianca");

  const changeNames = () => {
    userName = "João Souza";

    setName("Bianca Gomes");
  };

  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(age);
  };
  useEffect(() => {}, []);
  return (
    <div>
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes!</button>

      <p>Digite a sua idade</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age} anos!</p>
    </div>
  );
};

export default HookUseState;
