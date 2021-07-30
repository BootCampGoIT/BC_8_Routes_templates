import React, { Component } from "react";

const withState = (WrappedComponent) => {
  return class withState extends Component {
    state = {
      data: [],
      value: "Hello",
    };

    addNewData = (item) => {
      this.setState((prev) => ({ data: [...prev.data, item] }));
    };

    deleteItem = (id) => {
      this.setState((prev) => ({
        data: prev.data.filter((item) => item.id !== id),
      }));
    };
    render() {
      return (
        <WrappedComponent
          {...this.props}
          newState={this.state}
          newFunctions={{
            addNewData: this.addNewData,
            deleteItem: this.deleteItem,
          }}
        />
      );
    }
  };
};

export default withState;

// const hof = function (message) {
//   return function (name) {
//     console.log(message + " " + name + "!");
//   };
// };
// const res = hof("Hello");
// res("Alex");
// ======================

const hof = (message) => (name) => console.log(message + " " + name + "!");

hof("Hello")("Alex");
// ===============================

// const hof = function (callBack) {
//     callBack()
// };

// const callBack = () => console.log("Hello");

// hof(callBack);

// ===============
