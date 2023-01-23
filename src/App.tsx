import { Component, createSignal } from "solid-js";
import Count from "./assets/Count";
import { CountProvider } from "./CountProvider";

const App: Component = () => {
  const [count, setCount] = createSignal<number>(0);

  console.log(count());
  return (
    <>
      <h1>Cliques: {count}</h1>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Clique aqui!
      </button>

      <CountProvider>
        <Count />
      </CountProvider>
    </>
  );
};

export default App;
