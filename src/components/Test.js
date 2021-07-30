import axios from "axios";
import React, { Component } from "react";
import withState from "./hoc/withState";

class Test extends Component {
  state = {
    data: "",
  };
  async componentDidMount() {
    // console.log("this.props.match.params.id :>> ", this.props.match.params.id);
    const result = await axios.get(
      `https://shopbc8-30b11-default-rtdb.firebaseio.com/products/${this.props.match.params.id}.json`
    );
    this.setState({ data: result.data.data });
  }
  render() {
    return (
      <>
        <h2>Test</h2>
        <p>{this.state.data}</p>
        <p>{this.props.data}</p>
      </>
    );
  }
}

export default withState(Test);
