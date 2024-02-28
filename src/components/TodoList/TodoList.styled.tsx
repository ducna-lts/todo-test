import styled from "@emotion/styled";

const MainTodoStyled = styled.main`
  border-top: 1px solid #e6e6e6;
  position: relative;
  z-index: 2;
`;

const LabelToggleAllStyled = styled.label`
  align-items: center;
  display: flex;
  font-size: 0;
  height: 65px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: -65px;
  width: 45px;
  pointer-events: none;
`;

const InputToggleAllStyled = styled.input`
  border: none;
  bottom: 100%;
  opacity: 0;
  position: absolute;
  height: 60px;
  right: auto;
  width: 40px;
  &:checked + ${LabelToggleAllStyled} {
    &:before {
      color: #484848;
    }
  }
  + ${LabelToggleAllStyled} {
    align-items: center;
    display: flex;
    font-size: 0;
    height: 65px;
    justify-content: center;
    left: 0;
    position: absolute;
    top: -65px;
    width: 45px;
    &:before {
      color: #949494;
      content: "❯";
      display: inline-block;
      font-size: 22px;
      padding: 10px 27px;
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }
  }
`;

const UlStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export { MainTodoStyled, InputToggleAllStyled, LabelToggleAllStyled, UlStyled };
