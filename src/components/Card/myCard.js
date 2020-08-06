import React from "react";
import Button from "../Button/Button";
function MyCard(props) {
  return (
    <div className={props.className}>
      <div className={props.className + " image"}>
        <img src="https://via.placeholder.com/150" />
      </div>
      <div className={props.className + " body"}>
        <h5>Card title</h5>
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Button className="btn btn-primary" href="#">
          Go somewhere
        </Button>
      </div>
    </div>
  );
}

export default MyCard;
