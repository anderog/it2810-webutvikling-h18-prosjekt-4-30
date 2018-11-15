import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";

import "../styles/SearchField.css";

class SearchField extends React.Component {
  // Render a form Field from the redux-form lib
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

  // Handle the submit on the form
  // Providing a handler as a prop
  // Called by onSubmit in the redux-form
  handleSubmit = e => {
    e.preventDefault();
    this.props.search();
    this.props.page();
  };
}

// Receives the dispatch() method and return callback props.
const mapDispatchToProps = dispatch => ({
  search: () => dispatch(fetchProducts()),
  page: () => dispatch({ type: "PAGE_RESET" })
});

// Connects component to store and dispatch store state to the component props
SearchField = connect(
  () => ({}),
  mapDispatchToProps
)(SearchField);

export default reduxForm({ form: "searchValue" })(SearchField);
