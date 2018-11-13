import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";

class OrderBy extends React.Component {
  constructor(props) {
    super(props);
    this.togglePriceSort = this.togglePriceSort.bind(this);
    this.state = { orderByPrice: false };
  }

  togglePriceSort = () => {
    if (this.state.orderByPrice) {
      this.setState({ orderByPrice: !this.state.orderByPrice });
      this.props.dispatch({ type: "PRICE_ASC" });
      this.props.dispatch(fetchProducts());
    } else {
      this.props.dispatch({ type: "PRICE_DESC" });
      this.setState({ orderByPrice: !this.state.orderByPrice });
      this.props.dispatch(fetchProducts());
    }
  };

  render() {
    return (
      <div className="wrapper">
        <button onClick={this.togglePriceSort}>Pris</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  order: state.order
});

export default connect(mapStateToProps)(OrderBy);
