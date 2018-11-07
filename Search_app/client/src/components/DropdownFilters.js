import Collapsible from "react-collapsible";
import React, { Component } from "react";
import { connect } from "react-redux";

class DropdownFilters extends Component {
  render() {
    return (
      <div>
        <Collapsible trigger="+" className="inner">
          <p>
            This is the collapsible content. It can be any element or React
            component you like.
          </p>
        </Collapsible>
      </div>
    );
  }
}

export default DropdownFilters;
