import { TodoProvider } from "./context";
import TodoList from "./components/TodoList";
import FormText from "./components/FormText";

const TodoMain = () => {
  return (
    <TodoProvider>
      <FormText />
      <TodoList />
    </TodoProvider>
  );
};

export default TodoMain;
