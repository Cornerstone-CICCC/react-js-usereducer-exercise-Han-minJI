import { useReducer } from "react";
import { styleReducer } from "../reducers/styleReducer";

const Style = () => {
  const [state, dispatch] = useReducer(styleReducer, {
    isDark: false,
    fSize: 16,
  });

  return (
    <div
      style={{
        backgroundColor: state.isDark ? "black" : "white",
        fontSize: state.fSize,
        color: state.isDark ? "white" : "black",
      }}
    >
      <h2>Buttons</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
        facilis incidunt ab pariatur harum ducimus! Vitae necessitatibus id
        iusto obcaecati?
      </p>
      <button onClick={() => dispatch({ type: "TOGGLE" })}>
        Toggle Dark Mode
      </button>
      <button onClick={() => dispatch({ type: "INCREASE" })}>
        Increase Font Size
      </button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>
        Decrase Font Size
      </button>
    </div>
  );
};

export default Style;
