import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../context";
import { EActionTodo, TTodoItem } from "../../reducers";
import TodoItem from "../TodoItem";
import {
  InputToggleAllStyled,
  LabelToggleAllStyled,
  MainTodoStyled,
  UlStyled,
} from "./TodoList.styled";
import FooterBoard from "../FooterBoard";
import { useParams } from "react-router-dom";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [isAll, setIsAll] = useState(false);
  const { id } = useParams<"id">();

  useEffect(() => {
    if (state.todos && state.todos.length > 0) {
      const listCompleted = state.todos.filter((todo) => todo.isCompleted);
      setIsAll(listCompleted.length === state.todos.length);
    }
  }, [state]);

  const handleDelete = (iTodo: number) => {
    dispatch({
      type: EActionTodo.Delete,
      payload: {
        id: iTodo,
      },
    });
  };

  const handleComplete = (iTodo: number, todo: TTodoItem) => {
    dispatch({
      type: EActionTodo.SetStatus,
      payload: {
        id: [iTodo],
        isCompleted: !todo.isCompleted,
      },
    });
  };

  const handleOnChange = () => {
    dispatch({
      type: EActionTodo.SetStatus,
      payload: {
        id: state.todos.map((_todo, iTodo) => iTodo),
        isCompleted: !isAll,
      },
    });
  };

  const handleChangeText = (id: number, text: string) => {
    dispatch({
      type: EActionTodo.SetText,
      payload: {
        id,
        text,
      },
    });
  };

  let todos = state.todos;

  if (id === "active" || id === "completed") {
    todos = todos.filter((todo) => todo.isCompleted === (id === "completed"));
  }

  return (
    <>
      <MainTodoStyled data-testid="main">
        <div>
          <InputToggleAllStyled
            className="toggle-all"
            onChange={handleOnChange}
            type="checkbox"
            checked={isAll}
            data-testid="toggle-all"
          />
          <LabelToggleAllStyled htmlFor="toggle-all">
            Toggle All Input
          </LabelToggleAllStyled>
        </div>
        <UlStyled data-testid="todo-list">
          {todos.map((todo, i) => (
            <TodoItem
              key={i}
              todo={todo}
              onDelete={() => {
                handleDelete(i);
              }}
              onMarkComplete={() => handleComplete(i, todo)}
              onChange={(text) => handleChangeText(i, text)}
            />
          ))}
        </UlStyled>
      </MainTodoStyled>
      <FooterBoard todos={state.todos} />
    </>
  );
};

export default TodoList;
