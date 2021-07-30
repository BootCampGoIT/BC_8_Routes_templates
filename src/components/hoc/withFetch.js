import React from "react";
import axios from "axios";

const withFetch = (WrappedComponent) => {
  return class WithFetch extends React.Component {
    state = {
      data: [],
      loading: false,
      error: "",
    };

    async componentDidMount() {
      this.setState({ loading: true });
      const res = await axios.get(
        `https://shopbc8-30b11-default-rtdb.firebaseio.com/products.json`
      );
      if (res.data) {
        this.setState({
          data: [
            ...Object.keys(res.data).map((item) => ({
              id: item,
              ...res.data[item],
            })),
          ],
        });
      }
      this.setState({ loading: false });
    }
    render() {
      //   axios.post(
      //     `https://shopbc8-30b11-default-rtdb.firebaseio.com/products.json`,
      //     { name: "Milk" }
      //   );
      return (
        <>
          {this.state.loading ? (
            <h2>...loading</h2>
          ) : (
            <WrappedComponent {...this.props} data={this.state.data} />
          )}
        </>
      );
    }
  };
};
export default withFetch;
