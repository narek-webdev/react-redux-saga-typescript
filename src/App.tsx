import { useDispatch, useSelector } from "react-redux";
import { allTodos } from "./store/reducer/todos/selectors";
import { deleteTodo, insertTodo } from "./store/reducer/todos/actions";
import { useEffect } from "react";
import { getTodos } from "./store/sagas/todos/actions";

const App = () => {
  const todos = useSelector(allTodos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div>
      {todos.length
        ? todos.map(({ id, title }) => {
            return (
              <p key={id}>
                {title}
                <span
                  style={{ color: "red", marginLeft: "7px" }}
                  onClick={() => dispatch(deleteTodo(id))}
                >
                  Delete
                </span>
              </p>
            );
          })
        : null}

      <button
        onClick={() => dispatch(insertTodo({ id: 5, title: "new text" }))}
      >
        Add new
      </button>
    </div>
  );
};

export default App;
