import React from "react";
import { classNames } from "../../utils/classNames";
import MyCard from "./myCard";
export enum CardSize {
  Large = "lg",
  Small = "sm",
}
export enum CardType {
  Horizontal = "horizontal",
  Default = "default",
  CircledImage = "circledImage",
  NoImage = "noImage",
  Dark = "dark",
}

export interface ICardProps {
  cardSize?: CardSize;
  cardType?: CardType;
  children?: React.ReactNode;
  className?: string;
}
const myCard = () => {
  return (
    <div className="card">
      <img className="card img-top" src="https://via.placeholder.com/150" />
      <div className="card body">
        <h5 className="card title">Card title</h5>
        <p className="card text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export const Card: React.FC<any> = (props) => {
  const { cardSize, cardType, children, className, ...rest } = props;
  let styleClasses = classNames("card", {
    [`card-${cardType}`]: true,
    [`card-${cardSize}`]: !!cardSize,
  });
  if (className) {
    styleClasses += " " + className;
  }
  let card = <MyCard />;

  return card;
};
