import React from "react";
import { Field, reduxForm } from "redux-form";

import "../styles/SearchField.css";

class SearchField extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="head-bar">
        <h1 className="head-title">POLUTFORSKER</h1>
        <form className="search-form" onSubmit={handleSubmit}>
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
}

export default reduxForm({ form: "searchValue" })(SearchField);
