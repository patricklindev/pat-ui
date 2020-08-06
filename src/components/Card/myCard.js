import React from "react";
import Button from "../Button/Button";
function MyCard(props) {
  return (
    <div className={props.className}>
      <div className={props.className + " image"}>
        <img src={props.src} />
      </div>
      <div className={props.className + " body"}>
        <h5>{props.children}</h5>
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Button onClick={props.onClick} className="btn btn-primary" href="#">
          Show More Info
        </Button>
      </div>
    </div>
  );
}

export default MyCard;
