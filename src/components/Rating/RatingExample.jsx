import React from "react";
import { Rating } from "semantic-ui-react";
import { useState } from "react";

const handleRate = (e, { rating }) => {
  if (rating == 10) {
    alert("Of course it is 10!!!");
  } else {
    alert("But we deserve 10, please try again!");
  }
};

const RatingExample = () => (
  <div style={{ marginLeft: 20 }}>
    <h2>Leave an image review here:</h2>
    <Rating
      maxRating={10}
      defaultRating={0}
      icon="heart"
      size="massive"
      onRate={handleRate}
    />
    <br />
    <br />
  </div>
);
export default RatingExample;
