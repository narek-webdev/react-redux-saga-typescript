import { useDispatch, useSelector } from "react-redux";
import { allTodos } from "./store/reducer/todos/selectors";
import { insertTodo } from "./store/reducer/todos/actions";

const App = () => {
  const todos = useSelector(allTodos);

  const dispatch = useDispatch();

  return (
    <div>
      {todos.length
        ? todos.map((item) => {
            return <p key={item.id}>{item.text}</p>;
          })
        : ""}

      <button onClick={() => dispatch(insertTodo({ id: 5, text: "new text" }))}>
        Add new
      </button>
    </div>
  );
};

export default App;
