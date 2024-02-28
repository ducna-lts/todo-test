import React, { createContext, useReducer, Dispatch, ReactNode } from "react";
import { TTodoActions, TTodoType, todoReducer } from "./reducers";
import { getTodoInStore } from "./store.util";

type InitialStateType = {
  todos: TTodoType;
};

const initialState = {
  todos: getTodoInStore(),
};

const TodoContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<TTodoActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({ todos }: InitialStateType, action: TTodoActions) => ({
  todos: todoReducer(todos, action),
});

const TodoProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
