import { TTodoType, ZTodoS } from "./reducers";

export const getTodoInStore = (): TTodoType => {
  const dataStr = localStorage.getItem("todos");
  if (!dataStr || dataStr === null || dataStr === "") {
    return ZTodoS.parse([]);
  }
  try {
    const data = JSON.parse(dataStr);
    const todos = ZTodoS.parse(data);
    return todos;
  } catch (e) {
    return ZTodoS.parse([]);
  }
};

export const setTodoStore = (todo: TTodoType) => {
  localStorage.setItem("todos", JSON.stringify(todo));
};
