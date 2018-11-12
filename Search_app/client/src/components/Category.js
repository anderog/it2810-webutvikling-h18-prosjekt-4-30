import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";

class Category extends React.Component {
  typeReset = () => {
    this.props.dispatch({ type: "TYPE_RESET" });
    this.props.dispatch({ type: "PAGE_RESET" });
    this.props.dispatch(fetchProducts());
  };

  setRødvin = () => {
    this.props.dispatch({ type: "SET_RØDVIN" });
    this.props.dispatch({ type: "PAGE_RESET" });
    this.props.dispatch(fetchProducts());
  };

  setHvitvin = () => {
    this.props.dispatch({ type: "SET_HVITVIN" });
    this.props.dispatch({ type: "PAGE_RESET" });
    this.props.dispatch(fetchProducts());
  };

  render() {
    return (
      <div className="wrapper">
        <div>
          <button onClick={this.typeReset}>Alle typer</button>
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
