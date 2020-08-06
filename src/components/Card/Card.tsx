import React, { FC, ImgHTMLAttributes } from 'react';
import { PatButtonProps } from '../Button/Button';
import { classNames } from '../../utils/classNames';
import MyCard from './myCard';

export type CardSize = 'lg' | 'sm';

export type CardType =
  | 'horizontal'
  | 'default'
  | 'circledImage'
  | 'noImage'
  | 'dark'
  | 'largeImage';

export interface ICardProps {
  cardSize?: CardSize;
  cardType?: CardType;
  className?: string;
}
// export interface ImgHTMLAttributes<T> {
//   src?: string;
// }

export type myCardProps = ICardProps & ImgHTMLAttributes<HTMLImageElement>;
/**
 * A default card with a button to show more
 *
 * ```js
 * import {Card} from 'pat-ui'
 * ```
 */
export const Card: FC<myCardProps> = (props) => {
  const { cardSize, cardType, children, className, ...rest } = props;
  let styleClasses = classNames('card', {
    [`card-${cardType}`]: true,
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
