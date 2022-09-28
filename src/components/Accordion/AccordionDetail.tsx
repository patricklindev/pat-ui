import React, { ReactElement, Children, cloneElement } from 'react';
import { IAccordionProps } from './Accordion';
export type AccordionDetailProps = {
  children: ReactElement<IAccordionProps> | ReactElement<any>[];
  isOpen?: boolean;
  expanded?: boolean;
  sx?: {};
};
function AccordionDetail(props: AccordionDetailProps) {
  return (
    <div
      className={`accordion-detail-container ${props.isOpen ? 'active' : ''}`}
      style = {props.sx}
    >
      <div className="accordion-detail-container-content">
        {props.children
          ? Children.map(
              props.children,
              (child: ReactElement<IAccordionProps>) => {
                return cloneElement(child);
              }
            )
          : props.children}
      </div>
    </div>
  );
}

export default AccordionDetail;
