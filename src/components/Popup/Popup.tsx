import { classNames } from '../../utils/classNames';
import React, { FC, ReactNode } from 'react';

export type popupType = 'basic';

export type popupSize = 'small' | 'large';

export type popupColor = 'black' | 'green';

export interface IPopupProps {
  /** set class name */
  className?: string;
  /** set popup type */
  popupType?: popupType;
  /** set popup content */
  popupContent?: string;
  /** set popup size */
  popupSize?: popupSize;
  /** set popup color */
  popupColor?: popupColor;
}

export const Popup: FC<IPopupProps> = (props) => {
  const { className, popupType, popupSize, popupColor, ...rest } = props;

  let styleClasses = classNames('popup', {
    [`popup-${popupType}`]: true,
    [`popup-${popupSize}`]: !!popupSize,
    [`popup-${popupColor}`]: true,
  });

  if (className) {
    styleClasses += ' ' + className;
  }
  console.log(styleClasses);
  let popup = (
    <div
      className={styleClasses}
      {...(rest as IPopupProps)}
      data-testid="popup-content"
    >
      <div className="content">
        <p>{props.popupContent}</p>
      </div>
    </div>
  );
  return popup;
};
Popup.defaultProps = {
  popupType: 'basic',
  popupSize: 'large',
  popupColor: 'black',
};

export default Popup;
