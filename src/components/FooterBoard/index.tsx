import { useParams } from "react-router-dom";
import { EActionTodo, TTodoType } from "../../reducers";
import {
  ButtonClearCompletedStyled,
  FooterStyled,
  LinkItemStyled,
  ListItemStyled,
  ListStyled,
  TodoCountStyled,
} from "./FooterBoard.styled";
import { useContext } from "react";
import { TodoContext } from "../../context";

const allStatus = ["active", "completed"];
const FooterBoard = ({ todos }: { todos: TTodoType }) => {
  const { id } = useParams<"id">();

  const { dispatch } = useContext(TodoContext);

  const handleClearAllDone = () => {
    dispatch({
      type: EActionTodo.DeleteAllDone,
    });
  };

  return (
    <FooterStyled data-testid="footer">
      <TodoCountStyled>
        {todos.filter((todto) => !todto.isCompleted).length} item left!
      </TodoCountStyled>
      <ListStyled data-testid="footer-navigation">
        <ListItemStyled>
          <LinkItemStyled isActive={!allStatus.includes(id ?? "")} to="/">
            All
          </LinkItemStyled>
        </ListItemStyled>
        <ListItemStyled>
          <LinkItemStyled isActive={id === "completed"} to="/completed">
            Completed
          </LinkItemStyled>
        </ListItemStyled>
        <ListItemStyled>
          <LinkItemStyled isActive={id === "active"} to="/active">
            Active
          </LinkItemStyled>
        </ListItemStyled>
      </ListStyled>
      <ButtonClearCompletedStyled onClick={handleClearAllDone}>
        Clear completed
      </ButtonClearCompletedStyled>
    </FooterStyled>
  );
};

export default FooterBoard;
