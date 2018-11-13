import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";

class OrderBy extends React.Component {
  constructor(props) {
    super(props);
    this.togglePriceSort = this.togglePriceSort.bind(this);
    this.state = {
      orderByPrice: false,
      orderByName: true
    };
  }

  togglePriceSort = () => {
    if (this.state.orderByPrice) {
      this.setState({
        orderByPrice: false,
        orderByName: false
      });
      this.props.dispatch({ type: "PRICE_ASC" });
      this.props.dispatch(fetchProducts());
    } else {
      this.props.dispatch({ type: "PRICE_DESC" });
      this.setState({
        orderByPrice: true,
        orderByName: false
      });
      this.props.dispatch(fetchProducts());
    }
  };

  toggleNameSort = () => {
    if (!this.state.orderByName) {
      this.setState({
        orderByPrice: false,
        orderByName: true
      });
      this.props.dispatch({ type: "NAME_ASC" });
      this.props.dispatch(fetchProducts());
    } else {
      this.setState({
        orderByPrice: false,
        orderByName: false
      });
      this.props.dispatch({ type: "NAME_DESC" });
      this.props.dispatch(fetchProducts());
    }
  };

  render() {
    return (
      <div className="wrapper">
        <button onClick={this.togglePriceSort}>Pris</button>
        <button onClick={this.toggleNameSort}>Alfabetisk</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  order: state.order
});

export default connect(mapStateToProps)(OrderBy);
