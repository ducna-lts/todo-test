import { getTodoInStore, setTodoStore } from "../store.util";

describe("store.util", () => {
  it("default data", () => {
    const data = getTodoInStore();
    expect(data).toEqual([]);
  });
  it("has data", () => {
    const fakeData = [{ text: "test", isCompleted: false }];
    setTodoStore(fakeData);
    const data = getTodoInStore();
    expect(data).toEqual(fakeData);
  });

  it("fail data", () => {
    localStorage.setItem("todos", '[{"x:}]');
    const data = getTodoInStore();
    expect(data).toEqual([]);
  });
});
