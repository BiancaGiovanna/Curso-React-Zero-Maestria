import "./App.css";
import { FirstComponent } from "./components/FirstComponent";
import { SecondComponent } from "./components/SecondComponent";
import { Destrucuring, Category } from "./components/Destrucuring";
import State from "./components/State";
import { createContext } from "react";
import Context from "./components/Context";

type textOrNull = string | null;

interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  const name: string = "Bianca";
  const age: number = 30;
  const isWorking: boolean = false;

  const myText: textOrNull = "Tem um texto";

  const contextValue: IAppContext = {
    language: "JS",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TypeScript</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking ? <p>Esta trabalhando!</p> : <p>Não esta trabalhando!</p>}
        <FirstComponent />
        <SecondComponent name={name} />
        <Destrucuring
          title="Primeiro POST"
          content="Algum texto"
          tags={["ts, js"]}
          commentsQty={12}
          category={[Category.TS, Category.JS]}
        />
        <State />
        {myText}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
