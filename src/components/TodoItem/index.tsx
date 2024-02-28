import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { TTodoItem } from "../../reducers";
import {
  ButtonDestroyStyled,
  InputToggleStyled,
  LabelToggleStyled,
  LiStyled,
} from "./TodoItem.styled";
import { InputTodoStyled } from "../FormText/Form.styled";

const TodoItem = ({
  todo,
  onChange,
  onDelete,
  onMarkComplete,
}: {
  todo: TTodoItem;
  onDelete: () => void;
  onMarkComplete: () => void;
  onChange: (text: string) => void;
}) => {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(todo.text);
  }, [todo]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const [isWritable, setIsWritable] = useState(false);

  const handleDoubleClick = useCallback(() => {
    setIsWritable(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsWritable(false);
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (text && text.trim() !== "") {
        onChange(text);
        setIsWritable(false);
      }
    }
  };

  return (
    <LiStyled data-testid="todo-item">
      <div className="view">
        {isWritable ? (
          <InputTodoStyled
            id="todo-input"
            type="text"
            data-testid="text-input"
            placeholder="What needs to be done?"
            onBlur={handleBlur}
            value={text}
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <>
            <InputToggleStyled
              className="toggle"
              type="checkbox"
              data-testid="todo-item-toggle"
              checked={todo.isCompleted}
              onChange={() => {}}
              onClick={onMarkComplete}
            />
            <LabelToggleStyled
              onDoubleClick={handleDoubleClick}
              isCompeleted={todo.isCompleted}
              data-testid="todo-item-label"
            >
              {todo.text}
            </LabelToggleStyled>
            <ButtonDestroyStyled
              data-testid="todo-item-button"
              onClick={onDelete}
            />
          </>
        )}
      </div>
    </LiStyled>
  );
};

export default TodoItem;
