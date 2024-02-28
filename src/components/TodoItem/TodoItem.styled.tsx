import styled from "@emotion/styled";

const ButtonDestroyStyled = styled.button`
  bottom: 0;
  color: #949494;
  display: none;
  font-size: 30px;
  height: 40px;
  margin: auto 0;
  position: absolute;
  right: 10px;
  top: 0;
  transition: color 0.2s ease-out;
  width: 40px;
  appearance: none;
  background: none;
  border: 0;
  &:hover {
    color: #c18585;
  }
  &:after {
    content: "×";
    display: block;
    height: 100%;
    line-height: 1.1;
  }
`;

const LiStyled = styled.li`
  border-bottom: 1px solid #ededed;
  font-size: 24px;
  position: relative;
  &:hover {
    ${ButtonDestroyStyled} {
      display: block;
    }
  }
`;

const LabelToggleStyled = styled.label(
  ({ isCompeleted }: { isCompeleted: boolean }) => {
    const bg = isCompeleted
      ? `utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%2359A193%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20fill%3D%22%233EA390%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22%2F%3E%3C%2Fsvg%3E`
      : `utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23949494%22%20stroke-width%3D%223%22/%3E%3C/svg%3E`;
    return {
      backgroundImage: `url('data:image/svg+xml;${bg}')`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center left",
      color: isCompeleted ? "#949494" : "#484848",
      textDecoration: isCompeleted ? "line-through" : "none",
      display: "block",
      fontWeight: "400",
      lineHeight: "1.2",
      padding: "15px 15px 15px 60px",
      transition: "color .4s",
      wordBreak: "break-all",
      "&:focus": {
        boxShadow: "0 0 2px 2px #cf7d7d",
        outline: 0,
      },
    };
  },
);

const InputToggleStyled = styled.input`
  -webkit-appearance: none;
  appearance: none;
  border: none;
  bottom: 0;
  margin: auto 0;
  opacity: 0;
  position: absolute;
  text-align: center;
  top: 0;
  width: 40px;
  height: 40px;
  background: none;
  &:focus {
    box-shadow: 0 0 2px 2px #cf7d7d;
    outline: 0;
    + ${LabelToggleStyled} {
      box-shadow: 0 0 2px 2px #cf7d7d;
      outline: 0;
    }
  }
`;

export { LiStyled, InputToggleStyled, LabelToggleStyled, ButtonDestroyStyled };
