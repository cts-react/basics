import { useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todo";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  console.log('app called');
  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {//apply useCallback to avoid updates to child components
    setTodos((t) => [...t, "New Todo"]);
  }, []);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default App;