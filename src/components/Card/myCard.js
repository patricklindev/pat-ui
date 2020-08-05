import React from "react";
function MyCard(props) {
  return (
    <div className={props.className}>
      <img
        className={props.className + " img"}
        src="https://via.placeholder.com/150"
      />
      <div className={props.className + " body"}>
        <h5 className={props.className + " title"}>Card title</h5>
        <p className={props.className + " content"}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#">Go somewhere</a>
      </div>
    </div>
  );
}

export default MyCard;
