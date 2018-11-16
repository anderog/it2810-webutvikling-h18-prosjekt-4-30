import React from "react";
import { connect } from "react-redux";

import "../styles/Pagination.css";

// This component contains functionality for switching pages
class Pagination extends React.Component {
  // Dispatch to increment the page number by 1
  // Triggers a state change
  increment = () => {
    this.props.dispatch({ type: "PAGE_INCREMENT" });
  };

  // Dispatch to decrement the page number by 1
  // Triggers a state change
  decrement = () => {
    if (this.props.page > 1) {
      this.props.dispatch({ type: "PAGE_DECREMENT" });
    }
  };

  render() {
    // If the global state is ann array and it's not empty render pagination
    if (
      Array.isArray(this.props.products) &&
      !(this.props.products.length === 0)
    ) {
      return (
        <div className="wrapper">
          <div>
            <button
              className="decrementButton"
              onClick={this.decrement}
              disabled={this.props.page === 1}
            >
              &lt;
            </button>
            <span>{`${this.props.page} av ${this.props.totalPages}`}</span>
            <button
              className="incrementButton"
              onClick={this.increment}
              disabled={
                this.props.page === this.props.totalPages ||
                this.props.totalPages === 1
              }
            >
              &gt;
            </button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

// Maps the global redux-state to props
const mapStateToProps = state => ({
  products: state.products.items,
  page: state.page.page,
  totalPages: state.products.totalPages
});

export default connect(mapStateToProps)(Pagination);
