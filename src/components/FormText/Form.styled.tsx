import styled from "@emotion/styled";
import { InputToggleCommonStyled } from "../../App.styled";

const H1Styled = styled.h1`
  color: #b83f45;
  font-size: 80px;
  font-weight: 200;
  position: absolute;
  text-align: center;
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
  top: -140px;
  width: 100%;
`;

const InputTodoStyled = styled(InputToggleCommonStyled)`
  background: rgba(0, 0, 0, 0.003);
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  height: 65px;
  padding: 16px 16px 16px 60px;
  &::-webkit-input-placeholder {
    font-style: italic;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.4);
  }
  &::-moz-placeholder {
    font-style: italic;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.4);
  }
  &:focus {
    box-shadow: 0 0 2px 2px #cf7d7d;
    outline: 0;
  }
`;

export { H1Styled, InputTodoStyled };
