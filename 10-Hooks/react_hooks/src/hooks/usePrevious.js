import { useEffect, useRef, useDebugValue } from "react";

export const usePrevious = (value) => {
  const ref = useRef();

  useDebugValue("Custom Hook");
  useDebugValue("o numero anterior é: " + value);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
