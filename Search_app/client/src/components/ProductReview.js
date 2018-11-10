import React, { Component } from "react";
import { connect } from "react-redux";
import StarRating from "react-star-rating-component";

import {
  fetchReviews,
  updateReview,
  addReview
} from "../actions/reviewActions";

class ProductReview extends Component {
  getSum(total, num) {
    return total + num;
  }

  onStarClick(nextValue, prevValue, name) {
    let ratingItem = this.findRatingItem();
    if (ratingItem.length === 0) {
      // Add review for product in state and db
      ratingItem = {
        productID: this.props.productID,
        reviews: [nextValue]
      };
      this.props.addReview(ratingItem);
    } else {
      // Update the reviewItem in state and db
      ratingItem[0].reviews.push(nextValue);
      this.props.updateReview(ratingItem[0]);
    }
  }

  componentWillMount() {
    this.props.fetchReviews(this.props.productID);
  }

  // Checks if there is reviews for productID, returns empty list if not
  findRatingItem() {
    return this.props.reviewItems.filter(
      review => review.productID === this.props.productID
    );
  }

  render() {
    const ratingItem = this.findRatingItem();
    let ratingList;
    ratingItem.length > 0
      ? (ratingList = ratingItem[0].reviews)
      : (ratingList = []);

    let averageRating;
    ratingList.length > 0
      ? (averageRating = ratingList.reduce(this.getSum) / ratingList.length)
      : (averageRating = 0);
    return (
      <div className={"ratingList"}>
        <StarRating
          name="productRating"
          starCount={5}
          value={Number(averageRating.toFixed(0))}
          onStarClick={this.onStarClick.bind(this)}
        />
        <p>
          Antall reviews: {ratingList.length} {"  "}
          Gjennomsnitt: {averageRating.toFixed(2)}
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
  { fetchReviews, updateReview, addReview }
)(ProductReview);
