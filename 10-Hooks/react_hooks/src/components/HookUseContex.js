import { createContext } from "react";

export const SomeContext = createContext();

export const HookUseContex = ({ children }) => {
  const contextValue = "Testando contexto";

  return (
    <SomeContext.Provider value={{ contextValue }}>
      {children}
    </SomeContext.Provider>
  );
};
