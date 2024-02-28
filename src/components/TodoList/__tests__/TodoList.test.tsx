import { BrowserRouter } from "react-router-dom";
import TodoList from "..";
import { TodoContext } from "../../../context";
import { fireEvent, render, screen } from "../../../test/test-utils";

describe("Test TodoList", () => {
  it("none item", () => {
    render(
      <TodoContext.Provider
        value={{ state: { todos: [] }, dispatch: () => null }}
      >
        <TodoList />
      </TodoContext.Provider>,
      { wrapper: BrowserRouter },
    );
    expect(screen.getByTestId("todo-list")).toBeEmptyDOMElement();
    // const lable = screen.getByTestId('todo-item-label');
  });
  it("one item", () => {
    render(
      <TodoContext.Provider
        value={{
          state: { todos: [{ text: "Test", isCompleted: true }] },
          dispatch: () => null,
        }}
      >
        <TodoList />
      </TodoContext.Provider>,
      { wrapper: BrowserRouter },
    );
    // expect(screen.getByTestId('todo-list')).toBeEmptyDOMElement();
    const lis = screen.getAllByTestId("todo-item");
    expect(lis.length).toEqual(1);
    // const lable = screen.getByTestId('todo-item-label');
  });
  it("edit one item", () => {
    const { rerender } = render(
      <TodoContext.Provider
        value={{
          state: { todos: [{ text: "Test", isCompleted: true }] },
          dispatch: () => null,
        }}
      >
        <TodoList />
      </TodoContext.Provider>,
      { wrapper: BrowserRouter },
    );
    const lable = screen.getByTestId("todo-item-label");
    fireEvent.dblClick(lable);

    const input = screen.getByTestId("text-input");
    fireEvent.change(input, { target: { value: "TestChange" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });
    rerender(
      <TodoContext.Provider
        value={{
          state: { todos: [{ text: "TestChange", isCompleted: true }] },
          dispatch: () => null,
        }}
      >
        <TodoList />
      </TodoContext.Provider>,
    );
    expect(screen.getByTestId("todo-item-label")).toHaveTextContent(
      "TestChange",
    );
    // const lable = screen.getByTestId('todo-item-label');
  });
  it("delete one item", () => {
    const { rerender } = render(
      <TodoContext.Provider
        value={{
          state: { todos: [{ text: "Test", isCompleted: true }] },
          dispatch: () => null,
        }}
      >
        <TodoList />
      </TodoContext.Provider>,
      { wrapper: BrowserRouter },
    );

    const input = screen.getByTestId("todo-item-button");
    fireEvent.click(input);
    rerender(
      <TodoContext.Provider
        value={{ state: { todos: [] }, dispatch: () => null }}
      >
        <TodoList />
      </TodoContext.Provider>,
    );
    expect(screen.getByTestId("todo-list")).toBeEmptyDOMElement();
    // const lable = screen.getByTestId('todo-item-label');
  });
  it("change completed one item", () => {
    const { rerender } = render(
      <TodoContext.Provider
        value={{
          state: { todos: [{ text: "Test", isCompleted: false }] },
          dispatch: () => null,
        }}
      >
        <TodoList />
      </TodoContext.Provider>,
      { wrapper: BrowserRouter },
    );

    const input = screen.getByTestId("todo-item-toggle");
    fireEvent.click(input);
    rerender(
      <TodoContext.Provider
        value={{
          state: { todos: [{ text: "Test", isCompleted: true }] },
          dispatch: () => null,
        }}
      >
        <TodoList />
      </TodoContext.Provider>,
    );
    expect(screen.getByTestId("todo-item-label")).toHaveTextContent("Test");
    // const lable = screen.getByTestId('todo-item-label');
  });
});
