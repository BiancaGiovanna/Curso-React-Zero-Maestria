import { useLayoutEffect, useEffect, useState } from "react";

const HookUseLayoutEffect = () => {
  const [name, setName] = useState("Bianca");

  useEffect(() => {
    console.log("2");
    setName("Novo nome");
  }, []);

  useLayoutEffect(() => {
    console.log("1");
    setName("Layout");
  }, []);

  console.log(name);
  return (
    <div>
      <h2>useLayoutEffect</h2>
      <p>Nome: {name}</p>
    </div>
  );
};

export default HookUseLayoutEffect;
