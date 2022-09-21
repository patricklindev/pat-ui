import React from 'react';

export type AccordionHeaderProps = {
  children: JSX.Element | JSX.Element[];
  btnOnClick?: () => void;
  isOpen?: boolean;
};
const AccordionHeader = (props: AccordionHeaderProps) => {
  const childArray = Object.values(props.children);
  return (
    <div
      onClick={props.btnOnClick}
      className={`accordion-header ${props.isOpen ? 'active' : ''}`}
    >
      {Array.isArray(props.children) ? (
        <>
          <div className="accordion-header-title">{childArray[0]}</div>
          <div className="accordion-header-btn">
            <p style={{ color: '#6c757ded', fontSize: '18px' }}>
              {childArray.slice(1).map((elem, idx) => {
                return elem.props.children;
              })}
            </p>
          </div>
        </>
      ) : (
        <div className="accordion-header-btn">{props.children}</div>
      )}
    </div>
  );
};

export default AccordionHeader;
