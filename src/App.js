import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    case "dec":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
const inival = {
  count: 50,
};

function App() {
  let [state, dispatch] = useReducer(reducer, inival);
  const incrementdata = () => {
    dispatch({ type: "inc" });
  };

  const decrementdata = () => {
    dispatch({ type: "dec" });
  };

  return (
    <>
      <button onClick={incrementdata}>increment</button>
      <p>{state.count}</p>
      <button onClick={decrementdata}>decrement</button>
    </>
  );
}

export default App;
