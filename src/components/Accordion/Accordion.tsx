import React, {
  AccordionHTMLAttributes,
  AnchorHTMLAttributes,
  FC,
  MouseEvent,
} from 'react';
import { classNames } from '../../utils/classNames';

// export enum ButtonSize {
//   Large = 'lg',
//   Small = 'sm',
// }
export type AccordionSize = 'lg' | 'sm';
export type AccordionType =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'default'
  | 'link';
// export enum ButtonType {
//   Primary = 'primary',
//   Secondary = 'secondary',
//   Danger = 'danger',
//   Default = 'default',
//   Link = 'link',
// }
export interface IAccordionProps {
  /** set customized style */
  className?: string;
  /** set Accordion size */
  btnSize?: AccordionSize;
  /** set Accordion type */
  btnType?: AccordionType;
  /** set disabled Accordion */
  disabled?: boolean;
}

type NativeAccordionProps = IAccordionProps & AccordionHTMLAttributes<HTMLButtonElement>;
type NativeAchorAccordionProps = IAccordionProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;
export type PatAccordionProps = NativeAccordionProps | NativeAchorAccordionProps;

export const Accordion: FC<PatAccordionProps> = (props) => {
  const { btnSize, btnType, children, disabled, className, ...rest } = props;
  let styleClasses = classNames('btn', {
    [`btn-${btnType}`]: true,
    [`btn-${btnSize}`]: !!btnSize,
    disabled: !!(disabled && btnType === 'link'),
  });
  if (className) {
    styleClasses += ' ' + className;
  }

  let btn;
  if (btnType !== 'link') {
    btn = (
      <Accordion
        className={styleClasses}
        disabled={disabled}
        {...(rest as NativeAccordionProps)}
      >
        {props.children}
      </Accordion>
    );
  } else {
    if (disabled) {
      rest.onClick = (e: MouseEvent) => {
        e.preventDefault();
      };
    }
    btn = (
      <a className={styleClasses} {...(rest as NativeAchorAccordionProps)}>
        {props.children}
      </a>
    );
  }
  return btn;
};

Accordion.defaultProps = {
  btnType: 'default',
  disabled: false,
};

export default Accordion;