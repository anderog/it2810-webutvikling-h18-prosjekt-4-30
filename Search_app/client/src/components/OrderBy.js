import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import { ButtonDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import "../styles/OrderBy.css";

class OrderBy extends React.Component {
  constructor(props) {
    super(props);

    // Sets the component default state for the dropdown
    this.state = {
      dropdownOpen: false,
      dropdownText: "Sorter etter"
    };
  }

  // Changes the state for the dropdown
  toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  priceAsc = () => {
    this.props.dispatch({ type: "PRICE_ASC" });
    this.props.dispatch(fetchProducts());
    this.setState({ dropdownText: "Pris (lavest først)" });
    this.toggleDropdown();
  };

  priceDesc = () => {
    this.props.dispatch({ type: "PRICE_DESC" });
    this.props.dispatch(fetchProducts());
    this.setState({ dropdownText: "Pris (høyest først)" });
    this.toggleDropdown();
  };

  nameAsc = () => {
    this.props.dispatch({ type: "NAME_ASC" });
    this.props.dispatch(fetchProducts());
    this.setState({ dropdownText: "Navn (stigende)" });
    this.toggleDropdown();
  };

  nameDesc = () => {
    this.props.dispatch({ type: "NAME_DESC" });
    this.props.dispatch(fetchProducts());
    this.setState({ dropdownText: "Navn (synkende)" });
    this.toggleDropdown();
  };

  render() {
    return (
      <ButtonDropdown
        isOpen={this.state.dropdownOpen}
        toggle={this.toggleDropdown}
        className="dropDown"
      >
        <DropdownToggle caret color="">
          {this.state.dropdownText}
        </DropdownToggle>
        <DropdownMenu>
          <button className="priceButton" onClick={this.priceAsc}>
            Pris (lavest først)
          </button>
          <button className="priceButton" onClick={this.priceDesc}>
            Pris (høyest først)
          </button>
          <button className="priceButton" onClick={this.nameAsc}>
            Navn (stigende)
          </button>
          <button className="nameButton" onClick={this.nameDesc}>
            Navn (synkende)
          </button>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

const mapStateToProps = state => ({
  order: state.order
});

export default connect(mapStateToProps)(OrderBy);
