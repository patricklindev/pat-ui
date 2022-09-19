import React, { ReactNode, ButtonHTMLAttributes, useState,InputHTMLAttributes,FormEventHandler,useRef,useEffect } from "react";
import AccordionDetail from "./AccordionDetail";
import AccordionHeader from "./AccordionHeader";
import { classNames } from '../../utils/classNames';

//export type childrenType =  JSX.Element[] | JSX.Element
export interface IAccordionProps {
  children : JSX.Element[];
  disabled? : boolean;
  expanded? : boolean;
  onClick?: (a?: boolean) =>  void;
}

export type bhdrProps = InputHTMLAttributes<HTMLInputElement>
type InputArgs = IAccordionProps & Omit<bhdrProps, keyof IAccordionProps>
function Accordion( props :InputArgs ) {
  const {children, disabled,onClick,expanded, ...rest} = props
  const [open, setOpen] = useState<boolean>(expanded as boolean);

  useEffect(()=>{
    setOpen(expanded as boolean);
  },[expanded])

  const btnOnClick = (a: boolean) => {
    if(!disabled){
      console.log('ex',open)
      setOpen(!open);
    }
  };

  const checkOpenorNot = () => {
    if(typeof onClick === 'function'){
      onClick?.(!open)
    }


  }
  let styleClasses = classNames('accordion-container',{
    disabled: !!disabled
  })

  // {...(rest as bhdrProps)}
  return (
    <div onClick={checkOpenorNot} className={`${styleClasses} ${expanded ? "active" : ""}`}>
      {children.map((elem, idx) => {
        if (elem.type.name === "AccordionHeader") {
          return (
            <AccordionHeader
              isOpen={expanded}
              btnOnClick={() => btnOnClick(open)}
              key={idx} //uid
            >
              {elem.props.children}
            </AccordionHeader>
          );
        } else {
          return (
            <AccordionDetail expanded={props.expanded} isOpen={open} key={idx}>
              {elem.props.children}
            </AccordionDetail>
          );
        }
      })}
    </div>
  );
}

export default Accordion;
