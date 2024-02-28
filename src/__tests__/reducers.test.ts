import { EActionTodo, todoReducer } from "../reducers";

describe("reducers", () => {
  it("add data", () => {
    const fakeData = [{ text: "Test", isCompleted: false }];
    const data = todoReducer([], {
      type: EActionTodo.Create,
      payload: {
        text: "Test",
      },
    });
    expect(data).toEqual(fakeData);
  });
  it("remove data", () => {
    const fakeData = [{ text: "Test", isCompleted: false }];
    const data = todoReducer(fakeData, {
      type: EActionTodo.Delete,
      payload: {
        id: 0,
      },
    });
    expect(data).toEqual([]);
  });
  it("mark completed data", () => {
    const fakeData = [{ text: "Test", isCompleted: false }];
    const data = todoReducer(fakeData, {
      type: EActionTodo.SetStatus,
      payload: {
        id: [0],
        isCompleted: true,
      },
    });
    expect(data).toEqual([{ text: "Test", isCompleted: true }]);
  });
  it("change input", () => {
    const fakeData = [{ text: "Test", isCompleted: false }];
    const data = todoReducer(fakeData, {
      type: EActionTodo.SetText,
      payload: {
        id: 0,
        text: "ChangeTest",
      },
    });
    expect(data).toEqual([{ text: "ChangeTest", isCompleted: false }]);
  });
  it("remove all completed", () => {
    const fakeData = [
      { text: "Test", isCompleted: false },
      { text: "TestDone", isCompleted: true },
    ];
    const data = todoReducer(fakeData, {
      type: EActionTodo.DeleteAllDone,
    });
    expect(data).toEqual([{ text: "Test", isCompleted: false }]);
  });
});
