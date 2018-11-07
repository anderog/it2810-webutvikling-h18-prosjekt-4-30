import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";

import "../styles/SearchField.css";

class SearchField extends React.Component {
  render() {
    return (
      <div className="head-bar">
        <h1 className="head-title">POLUTFORSKER</h1>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <Field
            name="search"
            component="input"
            type="text"
            placeholder="Search..."
          />
        </form>
        <form className="search-form" onSubmit={this.handleFilter}>
          <Field
            name="price"
            component="input"
            type="text"
            placeholder="maxprice"
          />
        </form>
      </div>
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.search();
  };

  handleFilter = e => {
    e.preventDefault();
    this.props.price();
  };
}

const mapDispatchToProps = dispatch => ({
  search: () => dispatch(fetchProducts()),
  price: () => dispatch(fetchProducts())
});

SearchField = connect(
  () => ({}),
  mapDispatchToProps
)(SearchField);

export default reduxForm({ form: "searchValue" })(SearchField);
