import React, { Component } from "react";
import { connect } from "react-redux";
import { ThreeBounce } from "better-react-spinkit";
import Collapsible from "react-collapsible";

import { fetchProducts } from "../actions/productActions";
import ProductReview from "./ProductReview";

import "../styles/Products.css";

class Products extends Component {
  componentWillMount() {
    this.props.fetchProducts();
  }

  render() {
    const productItems = this.props.products.map(item => (
      <div key={item._id}>
        <Collapsible trigger={item.Varenavn} className="inner">
          <ProductReview productID={item._id} />
        </Collapsible>
      </div>
    ));

    return (
      <div className="list">
        {this.props.loading ? (
          <ThreeBounce size={8} gutter={6} />
        ) : (
          <div>{productItems}</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading
});

// Creates a higher-order component for making container components out of base React components
export default connect(
  mapStateToProps,
  { fetchProducts }
)(Products);