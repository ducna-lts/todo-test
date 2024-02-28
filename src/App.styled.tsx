import styled from "@emotion/styled";

const AppStyled = styled.div`
  background: #fff;
  box-shadow:
    0 2px 4px 0 rgba(0, 0, 0, 0.2),
    0 25px 50px 0 rgba(0, 0, 0, 0.1);
  margin: 130px 0 40px;
  position: relative;
`;

const InputToggleCommonStyled = styled.input`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  color: inherit;
  font-family: inherit;
  font-size: 24px;
  font-weight: inherit;
  line-height: 1.4em;
  margin: 0;
  padding: 6px;
  position: relative;
  width: 100%;
`;

export { AppStyled, InputToggleCommonStyled };
