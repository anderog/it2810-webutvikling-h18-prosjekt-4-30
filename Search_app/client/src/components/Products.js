import React, { Component } from "react";
import { connect } from "react-redux";
import { ThreeBounce } from "better-react-spinkit";
import Collapsible from "react-collapsible";

import { fetchProducts } from "../actions/productActions";
import Pagination from "./Pagination";
import ProductReview from "./ProductReview";
import ProductInformation from "./ProductInformation";

import "../styles/Products.css";

class Products extends Component {
  state = {
    prevProps: this.props.page
  };

  // Fetch products whenever component renders
  componentWillMount() {
    this.props.fetchProducts();
  }

  // Called directly after rendering
  // Checks if the resived page prop is different from se component state prop prevProps
  // If True -> on different page and execute a fetch for this page.
  componentDidUpdate(prevProps) {
    if (this.props.page !== prevProps.page) {
      this.props.fetchProducts();
    }
  }

  render() {
    // Renders a collapsible list from the resived productItems-list
    const productItems = this.props.products.map(item => (
      <div key={item._id}>
        <Collapsible trigger={item.Varenavn} className="inner">
          <ProductInformation productItem={item} />
          <ProductReview productID={item._id} />
        </Collapsible>
      </div>
    ));

    // Checks if still loading content, return loding-dots else return the productItems-list
    return (
      <div className="list">
        {this.props.loading ? (
          <ThreeBounce size={8} gutter={6} />
        ) : (
          <div>{productItems}</div>
        )}
        <Pagination className="pagination" />
      </div>
    );
  }
}

// Maps the global redux-state to props
const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  page: state.page.page
});

// Creates a higher-order component for making container components out of base React components
export default connect(
  mapStateToProps,
  { fetchProducts }
)(Products);
