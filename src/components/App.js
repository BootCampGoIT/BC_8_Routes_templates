import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import { AppStyled } from "./AppStyled";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

console.dir(React);
class App extends React.Component {
  componentDidMount() {
    // this.props.history.push({
    //   pathname: "/login",
    //   hash: "hello",
    //   state: {
    //     from: this.props.location.pathname,
    //   },
    // });
  }
  state = {};
  render() {
    return (
      <AppStyled>
        <Header />
        <Main />
      </AppStyled>
    );
  }
}

export default withRouter(App);
