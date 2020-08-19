import React, { FC, ReactNode } from 'react';
import Button from '../Button/Button';
import { classNames } from '../../utils/classNames';

export type CardSize = 'lg' | 'sm';
export type CardMode = 'default' | 'horizontal';
export type CardTheme = 'primary' | 'dark' | 'purple' | 'blue' | 'yellow';
export type CardType = 'circledImage' | 'noImage' | 'largeImage';

export interface ICardProps {
  /** set customized card */
  className?: string;
  /** set card mode */
  cardMode?: CardMode;
  /** set card type */
  cardType?: CardType;
  /** set card theme */
  cardTheme?: CardTheme;
  /** set card size */
  cardSize?: CardSize;
  /** set card title */
  cardTitle?: string;
  /** set card content */
  cardParagraph?: ReactNode;
  /** set card image source */
  cardImgSrc?: string;
  /** set action on bottun clicked */
  btnOnClick?: () => void;
  /** set button title */
  buttonTitle?: string;
}
// export interface ImgHTMLAttributes<T> {
//   src?: string;
// }

export type patCardProps = ICardProps;
/**
 * A card displays a flexible and extensible content container for various kinds of content,
 * including site content in a manner of a card
 *
 * ```js
 * import {Card} from 'pat-ui'
 * ```
 */
export const Card: FC<patCardProps> = (props) => {
  const {
    cardSize,
    cardType,
    cardMode,
    cardTheme,
    children,
    className,
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

  let Card =
    buttonTitle === undefined ? (
      <div className={styleClasses} data-testid='card-element'>
        <div
          className={styleClasses + ' image'}
          data-testid='card-image-element'
        >
          <img src={props.cardImgSrc} data-testid='image-element' />
        </div>
        <div className={styleClasses + ' body'} data-testid='card-body-element'>
          <h5>{props.cardTitle}</h5>
          <p>{props.cardParagraph}</p>
        </div>
      </div>
    ) : (
      <div className={styleClasses} data-testid='card-element'>
        <div
          className={styleClasses + ' image'}
          data-testid='card-image-element'
        >
          <img src={props.cardImgSrc} data-testid='image-element' />
        </div>
        <div className={styleClasses + ' body'} data-testid='card-body-element'>
          <h5>{props.cardTitle}</h5>
          <p>{props.cardParagraph}</p>
          <Button
            btnType='primary'
            onClick={props.btnOnClick}
            data-testid='button-element'
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
