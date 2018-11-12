import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import "../styles/Category.css";

class Category extends React.Component {
  typeReset = () => {
    this.props.dispatch({ type: "TYPE_RESET" });
    this.props.dispatch({ type: "PAGE_RESET" });
    this.props.dispatch(fetchProducts());
  };

  setRødvin = () => {
    this.props.dispatch({ type: "SET_RØDVIN" });
    this.props.dispatch({ type: "PAGE_RESET" });
    this.props.dispatch(fetchProducts());
  };

  setHvitvin = () => {
    this.props.dispatch({ type: "SET_HVITVIN" });
    this.props.dispatch({ type: "PAGE_RESET" });
    this.props.dispatch(fetchProducts());
  };
  setAkevitt = () => {
    this.props.dispatch({ type: "SET_AKEVITT" });
    this.props.dispatch({ type: "PAGE_RESET" });
    this.props.dispatch(fetchProducts());
  };

  setWhisky = () => {
    this.props.dispatch({ type: "SET_WHISKY" });
    this.props.dispatch({ type: "PAGE_RESET" });
    this.props.dispatch(fetchProducts());
  };

  setDruebrennevin = () => {
    this.props.dispatch({ type: "SET_DRUEBRENNEVIN" });
    this.props.dispatch({ type: "PAGE_RESET" });
    this.props.dispatch(fetchProducts());
  };

  setLikør = () => {
    this.props.dispatch({ type: "SET_LIKØR" });
    this.props.dispatch({ type: "PAGE_RESET" });
    this.props.dispatch(fetchProducts());
  };

  setVodka = () => {
    this.props.dispatch({ type: "SET_VODKA" });
    this.props.dispatch({ type: "PAGE_RESET" });
    this.props.dispatch(fetchProducts());
  };

  setIPA = () => {
    this.props.dispatch({ type: "SET_IPA" });
    this.props.dispatch({ type: "PAGE_RESET" });
    this.props.dispatch(fetchProducts());
  };

  setIPA = () => {
    this.props.dispatch({ type: "SET_SIDER" });
    this.props.dispatch({ type: "PAGE_RESET" });
    this.props.dispatch(fetchProducts());
  };

  // Typer som kan legges til, Druebrennevin, Likør, India pale ale, Sider, Vodka
  render() {
    return (
      <div className="wrapper">
        <div className="bc">
          <button onClick={this.typeReset}>Alle typer</button>
          <button onClick={this.setRødvin}>Rødvin</button>
          <button onClick={this.setHvitvin}>Hvitvin</button>
          <button onClick={this.setAkevitt}>Akevitt</button>
          <button onClick={this.setWhisky}>Whisky</button>
          <button onClick={this.setDruebrennevin}>Druebrennevin</button>
          <button onClick={this.setLikør}>Likør</button>
          <button onClick={this.setVodka}>Vodka</button>
          <button onClick={this.setIPA}>IPA</button>
          <button onClick={this.setSider}>Sider</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  endpoint: state.endpoint
});

export default connect(mapStateToProps)(Category);
