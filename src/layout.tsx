import { css } from "@emotion/react";
import Footer from "./components/Footer";
import { AppStyled } from "./App.styled";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div
      css={css`
        -webkit-font-smoothing: antialiased;
        background: #f5f5f5;
        color: #111;
        font:
          14px Arial,
          sans-serif;
        font-weight: 300;
        line-height: 1.4em;
        margin: 0 auto;
        max-width: 550px;
        min-width: 230px;
      `}
    >
      <AppStyled>
        <Outlet />
        <Footer />
      </AppStyled>
    </div>
  );
}

export default Layout;
