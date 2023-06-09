import { useEffect, useState } from "react";

export default function List({ getItems }) {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    console.log("Buscando itens do DB...");
    setMyItems(getItems);
  }, [getItems]);

  return (
    <div>{myItems && myItems.map((item) => <p key={item}>{item}</p>)}</div>
  );
}
