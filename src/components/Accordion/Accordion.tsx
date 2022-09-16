import React, { ReactNode, useState } from "react";
import AccordionDetail from "./AccordionDetail";
import AccordionHeader from "./AccordionHeader";

export type AccordionData = {
  title: string;
  content: ReactNode;
};

function Accordion({ children }: { children: JSX.Element[] }) {
  const [open, setOpen] = useState<boolean>(false);
  const btnOnClick = (a: boolean) => {
    setOpen(!a);
  };
  return (
    <div className={`accordion-container ${open ? "active" : ""}`}>
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
