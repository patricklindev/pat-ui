import React, { FunctionComponent, ComponentClass } from 'react';

import { Attributes } from 'react';
import { classNames } from '../../utils/classNames';

//import { ClassAttributes } from 'react';
//import { ReactHTML } from 'react';
//import styled from 'styled-components';

/*
boxType: mainly for style and root wrapper
className: mainly used for style and user customized style 
rootComponent: define root component for the box wrapper
boxInlineStyle: object that allow user to pass some basic inline CSS style
*/

export type BoxType = 'default' | 'default-border' | 'rootComponentWrapped';

export interface IBoxProps {
  /** set customized CSS style*/
  className?: string;
  /** set Box type*/
  boxType?: BoxType;
  /*set children node*/
  children?: JSX.Element | FunctionComponent | ComponentClass | string; //React.ReactNode is inclusive
  /** set the root component type*/
  rootComponent?: FunctionComponent | ComponentClass | string; //keyof ReactHTML;
  /** set the inline CSS style */
  boxInlineStyle?: {};
}

export type MyBoxProps = IBoxProps;

/**
 * A Box component serves as a wrapper component.
 *
 * ```js
 * import {Box} from 'pat-ui'
 * ```
 */

export const Box: FunctionComponent<IBoxProps> = (props) => {
  const {
    className,
    boxType,
    children,
    rootComponent,
    boxInlineStyle,
    ...rest
  } = props;

  let styleClass = classNames('box', { [`box-${boxType}`]: true });
  //if there is className provided
  if (className) styleClass += ' ' + className;

  let boxComponent;

  switch (boxType) {
    case 'default':
      boxComponent = (
        <div
          className={styleClass}
          style={boxInlineStyle}
          {...(rest as React.HTMLAttributes<any>)}
        >
          {children}
        </div>
      );
      break;
    case 'default-border':
      boxComponent = (
        <div className={styleClass} style={boxInlineStyle}>
          {children}
        </div>
      );
      break;
    case 'rootComponentWrapped':
      if (rootComponent === undefined) {
        boxComponent = (
          <div className={styleClass} style={boxInlineStyle}>
            {children}
          </div>
        );
      } else {
        boxComponent = React.createElement(
          rootComponent,
          {
            className: styleClass,
            style: { boxInlineStyle },
            ...rest,
          } as Attributes,
          children
        );
      }
      break;
    default:
      boxComponent = (
        <div className={styleClass} style={boxInlineStyle}>
          {children}
        </div>
      );
  }

  return boxComponent;
};

Box.defaultProps = {
  boxType: 'default',
};

export default Box;
