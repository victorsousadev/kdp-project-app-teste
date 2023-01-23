import {
  createContext,
  useContext,
  ParentComponent,
  createSignal,
  Accessor,
} from "solid-js";
import { createStore } from "solid-js/store";

export type CountContextState = {
  readonly count: number;
};
export type CountContextValue = [
  state: number | Accessor<number>,
  actions: {
    increment: () => void;
  }
];

const defaultState = {
  count: 0,
};

const CountContext = createContext<CountContextValue>([
  0,
  {
    increment: () => undefined,
  },
]);

export const CountProvider: ParentComponent<{
  count?: number;
}> = (props) => {
  const [state, setState] = createSignal<number>(
    props.count ?? defaultState.count
  );

  const increment = () => setState((c) => c + 1);

  return (
    <CountContext.Provider value={[state, { increment }]}>
      {props.children}
      {state}
    </CountContext.Provider>
  );
};

export const useCount = () => useContext(CountContext);
