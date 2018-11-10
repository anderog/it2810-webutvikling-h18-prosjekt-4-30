import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";

class Category extends React.Component {
  setRødvin = () => {
    this.props.dispatch({ type: "SET_RØDVIN" });
    this.props.dispatch(fetchProducts());
  };

  setHvitvin = () => {
    this.props.dispatch({ type: "SET_HVITVIN" });
    this.props.dispatch(fetchProducts());
  };

  render() {
    return (
      <div className="wrapper">
        <div>
          <button onClick={this.setRødvin}>Rødvin</button>
          <button onClick={this.setHvitvin}>Hvitvin</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  endpoint: state.endpoint
});

export default connect(mapStateToProps)(Category);
