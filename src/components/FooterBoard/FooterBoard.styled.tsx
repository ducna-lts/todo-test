import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const FooterStyled = styled.footer`
  border-top: 1px solid #e6e6e6;
  font-size: 15px;
  height: 20px;
  padding: 10px 15px;
  text-align: center;
  &:before {
    bottom: 0;
    box-shadow:
      0 1px 1px rgba(0, 0, 0, 0.2),
      0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgba(0, 0, 0, 0.2),
      0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgba(0, 0, 0, 0.2);
    content: "";
    height: 50px;
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
  }
`;

const TodoCountStyled = styled.span`
  float: left;
  text-align: left;
`;

const ListStyled = styled.ul`
  list-style: none;
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 0;
`;

const ListItemStyled = styled.li`
  display: inline;
`;

const LinkItemStyled = styled(Link)(({ isActive }: { isActive: boolean }) => {
  return {
    border: isActive ? "1px solid #ce4646" : "1px solid transparent",
    borderRadius: "3px",
    color: "inherit",
    margin: "3px",
    padding: "3px 7px",
    textDecoration: "none",
  };
});

const ButtonClearCompletedStyled = styled.button`
  cursor: pointer;
  float: right;
  line-height: 19px;
  position: relative;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
export {
  FooterStyled,
  TodoCountStyled,
  ListStyled,
  ListItemStyled,
  LinkItemStyled,
  ButtonClearCompletedStyled,
};
