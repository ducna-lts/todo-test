import { setTodoStore } from "./store.util";
import { z } from "zod";

export const ZTodoS = z
  .object({
    text: z.string(),
    isCompleted: z.boolean(),
  })
  .array();

export enum EActionTodo {
  Create = "CREATE_TODO",
  Delete = "DELETE_TODO",
  DeleteAllDone = "DELETE_ALL_DONE_TODO",
  SetStatus = "SET_STATUS_TODO",
  SetText = "SET_TEXT_TODO",
}

// Todo

export type TTodoType = z.infer<typeof ZTodoS>;
export type TTodoItem = z.infer<typeof ZTodoS.element>;
type TTodoPayload = {
  [EActionTodo.Create]: {
    text: string;
  };
  [EActionTodo.Delete]: {
    id: number;
  };
  [EActionTodo.DeleteAllDone]: undefined;
  [EActionTodo.SetStatus]: {
    id: number[];
    isCompleted: boolean;
  };
  [EActionTodo.SetText]: {
    id: number;
    text: string;
  };
};

type ActionMap<M> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type TTodoActions =
  ActionMap<TTodoPayload>[keyof ActionMap<TTodoPayload>];

export const todoReducer = (state: TTodoType, action: TTodoActions) => {
  let todos = state;
  switch (action.type) {
    case EActionTodo.Create:
      todos = [
        ...state,
        {
          text: action.payload.text,
          isCompleted: false,
        },
      ];
      break;
    case EActionTodo.Delete:
      todos = [...state.filter((_todo, i) => i !== action.payload.id)];
      break;
    case EActionTodo.DeleteAllDone:
      todos = [...state.filter((todo) => !todo.isCompleted)];
      break;
    case EActionTodo.SetStatus:
      todos = state.map((todo, i) => {
        if (action.payload.id.includes(i)) {
          return { ...todo, isCompleted: action.payload.isCompleted };
        }

        return todo;
      });
      break;
    case EActionTodo.SetText:
      todos = state.map((todo, i) => {
        if (action.payload.id === i) {
          return { ...todo, text: action.payload.text };
        }
        return todo;
      });
      break;
    default:
      todos = state;
      break;
  }
  setTodoStore(todos);
  return todos;
};
