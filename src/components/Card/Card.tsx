import React, { FC } from 'react';
import Button from '../Button/Button';
import { classNames } from '../../utils/classNames';

export type CardSize = 'lg' | 'sm';
export type CardMode = 'default' | 'horizontal';
export type CardTheme = 'dark' | 'purple' | 'blue' | 'yellow';
export type CardType = 'circledImage' | 'noImage' | 'largeImage';

export interface ICardProps {
  /** set customized card */
  className?: string;
  /** set card content */
  cardParagraph?: string;
  /** set card title */
  cardTitle?: string;
  /** set card image source */
  cardImgSrc?: string;
  /** set card theme */
  cardTheme?: CardTheme;
  /** set card mode */
  cardMode?: CardMode;
  /** set card size */
  cardSize?: CardSize;
  /** set card type */
  cardType?: CardType;
  /** set action on bottun clicked */
  btnOnClick?: () => void;
  /** set the redirect page on button clicked*/
  buttonHref?: string;
  /** set button title */

  buttonTitle?: string;
}
// export interface ImgHTMLAttributes<T> {
//   src?: string;
// }

export type patCardProps = ICardProps;
/**
 * A card with a button to show more
 *
 */
export const Card: FC<patCardProps> = (props) => {
  const {
    cardSize,
    cardType,
    cardMode,
    cardTheme,
    children,
    className,
    buttonHref,
    buttonTitle,
    ...rest
  } = props;
  let styleClasses = classNames('card', {
    [`card-${cardMode}`]: true,
    [`card-${cardType}`]: true,
    [`card-${cardTheme}`]: true,
    [`card-${cardSize}`]: !!cardSize,
  });
  if (className) {
    styleClasses += ' ' + className;
  }

  let Card = (
    <div className={styleClasses} data-testid='card-element'>
      <div className={styleClasses + ' image'} data-testid='card-image-element'>
        <img src={props.cardImgSrc} data-testid='image-element' />
      </div>
      <div className={styleClasses + ' body'} data-testid='card-body-element'>
        <h5>{props.cardTitle}</h5>
        <p>{props.cardParagraph}</p>
        <Button
          onClick={props.btnOnClick}
          data-testid='button-element'
          className='btn btn-primary'
          href={props.buttonHref}
        >
          {props.buttonTitle}
        </Button>
      </div>
    </div>
  );
  return Card;
};
Card.defaultProps = {
  cardMode: 'default',
};
export default Card;
