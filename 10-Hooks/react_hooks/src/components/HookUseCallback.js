import { useCallback, useState } from "react";
import List from "./List";

export default function HookUseCallback() {
  const [counter, setCounter] = useState(0);

  const getItems = useCallback(() => {
    return ["a", "b", "c"];
  }, []);
  return (
    <div>
      <h2>Use CallBack</h2>
      <List getItems={getItems} />
      <button onClick={() => setCounter(counter + 1)}>Alterar!</button>
      <p>{counter}</p>
    </div>
  );
}
