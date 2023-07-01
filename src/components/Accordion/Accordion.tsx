import React, { FC, useState, InputHTMLAttributes } from 'react';
import { action } from '@storybook/addon-actions';

export interface IAccordionProps {
  /** set customized style */
  className?: string;
  /** set button size */
  disabled?: boolean;
  /** set card size */
  expanded?: boolean;
  /** set card size */
  onChange?: () => void;
}
export type patAccordionProps = IAccordionProps;
export const Accordion: FC<patAccordionProps> = (props) => {
  const { expanded, disabled, onChange, ...rest } = props;
  let initialState: boolean = expanded === undefined ? false : expanded;
  const [show, setShow] = useState<boolean | false>(initialState);
  const handleDefaultClick = () => {
    setShow(!show);
  };

  let accordion;
  if (props.onChange === undefined) {
    accordion = (
      <div className="accordion">
        <button
          className="accordion title"
          onClick={handleDefaultClick}
          disabled={disabled}
        >
          <div className="accordion title-summary">
            <p className="accordion title-information">avd</p>
            <p className="accordion title-additional">sew</p>
          </div>
        </button>

        {show ? (
          <p className="accordion accordion-description">{props.children}</p>
        ) : null}
      </div>
    );
  } else {
    accordion = (
      <div>
        <button onClick={onChange}>Expansion Panel1</button>
        {props.expanded ? <p>{props.children}</p> : null}
      </div>
    );
  }
  return accordion;
};

Accordion.defaultProps = {};

export default Accordion;
