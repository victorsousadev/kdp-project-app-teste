import { Component } from "solid-js";
import { useCount } from "../CountProvider";

const Count: Component = () => {
  const [count, { increment }] = useCount();

  return (
    <button type="button" onClick={increment}>
      Cliques: {count}
    </button>
  );
};

export default Count;
