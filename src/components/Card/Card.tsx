import React, { FC, ImgHTMLAttributes } from 'react';
import { PatButtonProps } from '../Button/Button';
import { classNames } from '../../utils/classNames';
import MyCard from './myCard';

export type CardSize = 'lg' | 'sm';
export type CardTheme = 'dark' | 'purple' | 'blue' | 'yellow';
export type CardType =
  | 'horizontal'
  | 'default'
  | 'circledImage'
  | 'noImage'
  | 'largeImage';

export interface ICardProps {
  /** set card theme */
  cardTheme?: CardTheme;
  /** set card size */
  cardSize?: CardSize;
  /** set card type */
  cardType?: CardType;
  /** set customized card */
  className?: string;
}
// export interface ImgHTMLAttributes<T> {
//   src?: string;
// }

export type myCardProps = ICardProps & ImgHTMLAttributes<HTMLImageElement>;
/**
 * A card with a button to show more
 *
 */
export const Card: FC<myCardProps> = (props) => {
  const { cardSize, cardType, cardTheme, children, className, ...rest } = props;
  let styleClasses = classNames('card', {
    [`card-${cardType}`]: true,
    [`card-${cardTheme}`]: true,
    [`card-${cardSize}`]: !!cardSize,
  });
  if (className) {
    styleClasses += ' ' + className;
  }

  let card = (
    <MyCard className={styleClasses} src={props.src} {...(rest as myCardProps)}>
      {props.children}
    </MyCard>
  );
  return card;
};
Card.defaultProps = {
  cardType: 'default',
};
export default Card;
