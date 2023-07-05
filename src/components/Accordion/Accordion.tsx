import React, { FC, useState } from 'react';
import { action } from '@storybook/addon-actions';
import up from '../../asset/icon/expanded-up.svg';
import down from '../../asset/icon/expanded-down.svg';
import { classNames } from '../../utils/classNames';
export type AccordionType = 'default' | 'checkbox';
export interface IAccordionProps {
  /** set customized style */
  className?: string;
  /** set disabled Accordion */
  disabled?: boolean;
  /** set Accordion expanded */
  expanded?: boolean;
  /** set action on title clicked */
  onChange?: () => void;
  /**set Accordion title */
  title?: string;
  /**set Accordion summary */
  summary?: string;
  /**set Accordion expand icon */
  expandIcon?: string;
  /**set Accordion retract icon */
  retractIcon?: string;
  /**set Accordion type */
  type?: AccordionType;
}
export type patAccordionProps = IAccordionProps;
export const Accordion: FC<patAccordionProps> = (props) => {
  const {
    className,
    expanded,
    disabled,
    title,
    summary,
    onChange,
    type,
    ...rest
  } = props;
  let initialState: boolean = expanded === undefined ? false : expanded;
  const [show, setShow] = useState<boolean | false>(initialState);
  const handleDefaultClick = () => {
    setShow(!show);
  };
  const isExpanded: string = show ? 'isExpanded' : '';
  const isDisabled: string = disabled ? 'isDisabled' : '';
  const isControlExpanded: string = props.expanded ? 'isExpanded' : '';

  let styleClasses = classNames('accordion', {
    isDisabled: !!isDisabled,
  });
  if (className) {
    styleClasses += ' ' + className;
  }

  let accordion;
  if (props.onChange === undefined) {
    accordion = (
      <div
        className={styleClasses + ' ' + isExpanded}
        data-testid="accordion-element"
      >
        <div className={styleClasses + ' accordion-title-container'}>
          {type === 'checkbox' && (
            <input
              className={styleClasses + ' accordion-title-checkbox'}
              type={type}
            />
          )}
          <button
            className={styleClasses + ' accordion-title'}
            onClick={handleDefaultClick}
            disabled={disabled}
          >
            <div className={styleClasses + ' accordion-title-summary'}>
              <p className={styleClasses + ' accordion-title-information'}>
                {title}
              </p>
              <p className={styleClasses + ' accordion-title-additional'}>
                {summary}
              </p>
              <img
                className={styleClasses + ' accordion-title-icon'}
                src={isExpanded ? props.retractIcon : props.expandIcon}
                alt="mySvgImage"
              />
            </div>
          </button>
        </div>

        {show ? (
          <p className={styleClasses + ' accordion-description'}>
            {props.children}
          </p>
        ) : (
          <p className={styleClasses + ' accordion-description hidden'}>
            {props.children}
          </p>
        )}
      </div>
    );
  } else {
    accordion = (
      <div
        className={styleClasses + ' ' + isControlExpanded}
        data-testid="accordion-element"
      >
        <div className={styleClasses + ' accordion-title-container'}>
          {type === 'checkbox' && (
            <input
              className={styleClasses + ' accordion-title-checkbox'}
              type={type}
            />
          )}
          <button
            className={styleClasses + ' accordion-title'}
            onClick={onChange}
            disabled={disabled}
          >
            <div className={styleClasses + ' accordion-title-summary'}>
              <p className={styleClasses + ' accordion-title-information'}>
                {title}
              </p>
              <p className={styleClasses + ' accordion-title-additional'}>
                {summary}
              </p>
              <img
                className={styleClasses + ' accordion-title-icon'}
                src={isExpanded ? props.retractIcon : props.expandIcon}
                alt="mySvgImage"
              />
            </div>
          </button>
        </div>

        {props.expanded ? (
          <p className={styleClasses + ' accordion-description'}>
            {props.children}
          </p>
        ) : (
          <p className={styleClasses + ' accordion-description hidden'}>
            {props.children}
          </p>
        )}
      </div>
    );
  }
  return accordion;
};

Accordion.defaultProps = {
  title: 'Summary text',
  summary: '',
  expandIcon: down,
  retractIcon: up,
  type: 'default',
};

export default Accordion;
