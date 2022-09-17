import React, { ReactNode, useState } from "react";
import AccordionDetail from "./AccordionDetail";
import AccordionHeader from "./AccordionHeader";
import { classNames } from '../../utils/classNames';

//export type childrenType =  JSX.Element[] | JSX.Element
export interface IAccordionProps {
  children : JSX.Element[];
  disabled? : boolean;
}

function Accordion( props :IAccordionProps ) {
  const {children, disabled, ...rest} = props
  const [open, setOpen] = useState<boolean>(false);
  const btnOnClick = (a: boolean) => {
    if(!disabled){
      setOpen(!a);
    }

  };
  let styleClasses = classNames('accordion-container',{
    disabled: !!disabled
  })
  console.log(styleClasses)

  return (
    <div className={`${styleClasses} ${open ? "active" : ""}`}>
      {children.map((elem, idx) => {
        if (elem.type.name === "AccordionHeader") {
          return (
            <AccordionHeader
              isOpen={open}
              btnOnClick={() => btnOnClick(open)}
              key={idx} //uid
            >
              {elem.props.children}
            </AccordionHeader>
          );
        } else {
          return (
            <AccordionDetail isOpen={open} key={idx}>
              {elem.props.children}
            </AccordionDetail>
          );
        }
      })}
    </div>
  );
}

export default Accordion;
