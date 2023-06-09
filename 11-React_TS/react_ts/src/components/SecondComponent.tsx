import * as React from 'react';

export interface IAppProps {
  name: string
}

export function SecondComponent (props: IAppProps) {
  return (
    <div>
      <p>Meu segundo Componente</p>
      <p>Meu noem é {props.name}</p>
    </div>
  );
}
