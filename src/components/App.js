import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import { AppStyled } from "./AppStyled";

const App = () => {
  return (
    <AppStyled>
      <Header />
      <Main />
    </AppStyled>
  );
};

export default App;
