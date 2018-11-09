import React, { Component } from "react";
import "../styles/ProductInformation.css";

export default class ProductInformation extends Component {
  render() {
    const product = this.props.productItem;
    return (
      <div className={"infoContainer"}>
        <div className={"row1"}>
          <h4 className={"infoHeader"}>Info</h4>
          <p>Volum: {product.Volum}</p>
          <p>Alkohol: {product.Alkohol}%</p>
          <p>Land: {product.Land}</p>
        </div>
        <div className={"row2"}>
          <h4 className={"infoHeader"}>Pris</h4>
          <p>
            Pris: {product.Pris}
            ,-
          </p>
          <p>
            Literpris: {product.Literpris}
            ,-
          </p>
          <p>
            Pris per alkoholenhet:{" "}
            {(product.Literpris / (product.Alkohol / 100) / (200 / 3)).toFixed(
              2
            )}
            {""}
            ,-
          </p>
        </div>
        <div className={"row3"}>
          <h4 className={"infoHeader"}>Smak</h4>
        </div>
      </div>
    );
  }
}
