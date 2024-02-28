import TodoItem from "..";
import { fireEvent, render, screen } from "../../../test/test-utils";

describe("Test TodoItem", () => {
  it("Have Item", () => {
    render(
      <TodoItem
        todo={{ text: "Test", isCompleted: false }}
        onChange={() => {}}
        onDelete={() => {}}
        onMarkComplete={() => {}}
      />,
    );
    const lable = screen.getByTestId("todo-item-label");
    expect(lable).toHaveTextContent("Test");
  });

  it("use doubleClick", () => {
    render(
      <TodoItem
        todo={{ text: "Test", isCompleted: false }}
        onChange={() => {}}
        onDelete={() => {}}
        onMarkComplete={() => {}}
      />,
    );
    const lable = screen.getByTestId("todo-item-label");
    fireEvent.dblClick(lable);

    expect(screen.getByTestId("text-input")).toBeInTheDocument();
  });

  it("use change text", () => {
    render(
      <TodoItem
        todo={{ text: "Test", isCompleted: false }}
        onChange={() => {}}
        onDelete={() => {}}
        onMarkComplete={() => {}}
      />,
    );
    const lable = screen.getByTestId("todo-item-label");
    fireEvent.dblClick(lable);

    const input = screen.getByTestId("text-input");
    fireEvent.change(input, { target: { value: "TestChange" } });
    expect(screen.getByTestId("text-input")).toHaveValue("TestChange");
  });

  it("focus out", () => {
    render(
      <TodoItem
        todo={{ text: "Test", isCompleted: false }}
        onChange={() => {}}
        onDelete={() => {}}
        onMarkComplete={() => {}}
      />,
    );
    const lable = screen.getByTestId("todo-item-label");
    fireEvent.dblClick(lable);

    const input = screen.getByTestId("text-input");
    fireEvent.change(input, { target: { value: "TestChange" } });
    fireEvent.focusOut(input);
    expect(screen.getByTestId("todo-item-label")).toHaveTextContent("Test");
  });

  it("Change input", () => {
    const { rerender } = render(
      <TodoItem
        todo={{ text: "Test", isCompleted: false }}
        onChange={() => {}}
        onDelete={() => {}}
        onMarkComplete={() => {}}
      />,
    );
    const lable = screen.getByTestId("todo-item-label");
    fireEvent.dblClick(lable);

    const input = screen.getByTestId("text-input");
    fireEvent.change(input, { target: { value: "TestChange" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });
    rerender(
      <TodoItem
        todo={{ text: "TestChange", isCompleted: false }}
        onChange={() => {}}
        onDelete={() => {}}
        onMarkComplete={() => {}}
      />,
    );
    expect(screen.getByTestId("todo-item-label")).toHaveTextContent(
      "TestChange",
    );
  });
});
