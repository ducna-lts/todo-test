import { ChangeEvent, KeyboardEvent, useContext, useState } from "react";
import { H1Styled, InputTodoStyled } from "./Form.styled";
import { TodoContext } from "../../context";
import { EActionTodo } from "../../reducers";

const FormText = () => {
  const [text, setText] = useState("");

  const { dispatch } = useContext(TodoContext);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (text && text.trim() !== "") {
        dispatch({
          type: EActionTodo.Create,
          payload: {
            text,
          },
        });
        setText("");
      }
    }
  };

  return (
    <header data-testid="header">
      <H1Styled>todos</H1Styled>
      <div>
        <InputTodoStyled
          id="todo-input"
          type="text"
          data-testid="text-input"
          placeholder="What needs to be done?"
          value={text}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </header>
  );
};

export default FormText;
