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
  className?: string;
}
export interface ImgHTMLAttributes<T> {
  src?: string;
}
type CardProps = ICardProps & ImgHTMLAttributes<HTMLImageElement>;

export const Card: React.FC<CardProps> = (props) => {
  const { cardSize, cardType, className, src } = props;
  let styleClasses = classNames("card", {
    [`card-${cardType}`]: true,
    [`card-${cardSize}`]: !!cardSize,
  });
  if (className) {
    styleClasses += " " + className;
  }
  let card = <MyCard className={styleClasses}></MyCard>;
  return card;
};
Card.defaultProps = {
  cardType: CardType.Default,
};
export default Card;
