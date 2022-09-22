import React, { useState, InputHTMLAttributes, useEffect } from 'react';
import AccordionDetail from './AccordionDetail';
import AccordionHeader from './AccordionHeader';
import { classNames } from '../../utils/classNames';

export interface IAccordionProps {
  children: JSX.Element[];
  disabled?: boolean;
  expanded?: boolean;
  sx?: {};
  rounded?: boolean;
  onClick?: (a?: boolean) => void;

}

export type bhdrProps = InputHTMLAttributes<HTMLInputElement>;
type InputArgs = IAccordionProps & Omit<bhdrProps, keyof IAccordionProps>;
function Accordion(props: InputArgs) {
  const { children, disabled, onClick, expanded, sx, ...rest } = props;

  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    setOpen(expanded as boolean);
  }, [expanded]);

  const btnOnClick = (a: boolean) => {
    if (!disabled) {
      setOpen(!a);
    }
  };

  const checkOpenorNot = () => {
    if (typeof onClick === 'function') {
      onClick?.(!open);
    }
  };
  let styleClasses = classNames('accordion-container', {
    disabled: !!disabled,
  });

  return (
    <div
      onClick={checkOpenorNot}
      className={`${styleClasses} ${expanded || open ? 'active' : ''}`}
      style={sx}
    >
      {children.map((elem, idx) => {
        if (elem.type.name === 'AccordionHeader') {
          return (
            <AccordionHeader
              isOpen={open}
              btnOnClick={() => btnOnClick(open)}
              key={`${elem.type.name}${idx}`} //uid
            >
              {elem.props.children}
            </AccordionHeader>
          );
        } else {
          return (
            <AccordionDetail  expanded={props.expanded} isOpen={open} key={idx}>
              {elem.props.children}
            </AccordionDetail>
          );
        }
      })}
    </div>
  );
}

export default Accordion;
