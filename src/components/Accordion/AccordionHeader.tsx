import React from 'react';

export type AccordionHeaderProps = {
  children: JSX.Element | JSX.Element[];
  btnOnClick?: () => void;
  isOpen?: boolean;
  sx?: {};
  expandedStyle?: {};
};
const AccordionHeader = (props: AccordionHeaderProps) => {
  return (
    <div
      style={props.sx}
      onClick={props.btnOnClick}
      className={`accordion-header ${props.isOpen ? 'active' : ''}`}
    >
      <div
        style={props.isOpen ? props.expandedStyle : {}}
        className="accordion-header__btn"
      >
        {props.children}
      </div>
    </div>
  );
};

export default AccordionHeader;
