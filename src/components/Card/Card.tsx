import React, {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  FC,
  MouseEvent,
} from "react";
import { PatButtonProps } from "../Button/Button";
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
// export interface ImgHTMLAttributes<T> {
//   src?: string;
// }

type myCardProps = ICardProps & React.ImgHTMLAttributes<HTMLImageElement>;
/**
 * A default card with a button to show more
 *
 * ```js
 * import {Card} from 'pat-ui'
 * ```
 */
export const Card: React.FC<myCardProps> = (props) => {
  const { cardSize, cardType, children, className, ...rest } = props;
  let styleClasses = classNames("card", {
    [`card-${cardType}`]: true,
    [`card-${cardSize}`]: !!cardSize,
  });
  if (className) {
    styleClasses += " " + className;
  }
  let card = (
    <MyCard className={styleClasses} {...(rest as myCardProps)}>
      {props.children}
    </MyCard>
  );
  return card;
};
Card.defaultProps = {
  cardType: CardType.Default,
};
export default Card;
