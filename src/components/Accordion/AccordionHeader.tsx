import React from "react";
import "./AccordionHeader.scss";

export type AccordionHeaderProps = {
  children: JSX.Element | Array<JSX.Element>;
  btnOnClick?: () => void;
  isOpen?: boolean;
};
const AccordionHeader = (props: AccordionHeaderProps) => {
  return (
    <div
      onClick={props.btnOnClick}
      className={`accordion-header ${props.isOpen ? "active" : ""}`}
    >
      {Array.isArray(props.children) ? (
        props.children.map((elem, idx) => {
          if (idx === 0)
            return <h2 className="accordion-header-title">{elem}</h2>;
          return (
            <p
              key={idx}
              onClick={props.btnOnClick}
              className="accordion-header-btn"
            >
              {elem}
            </p>
          );
        })
      ) : (
        <div className="accordion-header-btn"><p>{props.children}</p></div>
      )}
    </div>
  );
};

export default AccordionHeader;
