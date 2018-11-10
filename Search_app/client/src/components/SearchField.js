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
      </div>
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.search();
    this.props.page();
  };
}

const mapDispatchToProps = dispatch => ({
  search: () => dispatch(fetchProducts()),
  page: () => dispatch({ type: "PAGE_RESET" })
});

SearchField = connect(
  () => ({}),
  mapDispatchToProps
)(SearchField);

export default reduxForm({ form: "searchValue" })(SearchField);
