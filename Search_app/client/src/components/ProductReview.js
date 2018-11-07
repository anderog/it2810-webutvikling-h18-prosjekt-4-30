import React, { Component } from "react";
import { connect } from "react-redux";
import StarRating from "react-star-rating-component";

import { fetchReviews } from "../actions/reviewActions";

class ProductReview extends Component {
  getSum(total, num) {
    return total + num;
  }

  onStarClick(nextValue, prevValue, name) {
    this.props.reviews.concat(nextValue);
  }

  componentWillMount() {
    this.props.fetchReviews(this.props.productID);
  }

  render() {
    const ratingItem = this.props.reviewItems.filter(
      review => review.productID === this.props.productID
    );
    console.log(ratingItem);
    let rating;
    ratingItem.length > 0 ? (rating = ratingItem[0].reviews) : (rating = []);
    console.log(rating);
    let averageRating;
    rating.length > 0
      ? (averageRating = rating.reduce(this.getSum) / rating.length)
      : (averageRating = 0);
    return (
      <div className={"rating"}>
        <StarRating
          name="productRating"
          starCount={5}
          value={averageRating.toFixed(0)}
          onStarClick={this.onStarClick.bind(this)}
        />
        <p>
          Antall reviews: {rating.length > 0 ? rating.length : 0} Average:
          {averageRating.toFixed(2)}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reviewItems: state.reviews.reviewItems
});

export default connect(
  mapStateToProps,
  { fetchReviews }
)(ProductReview);
