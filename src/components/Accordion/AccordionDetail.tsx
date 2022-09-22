import React, { useRef,ReactElement,Children,cloneElement, useState, useEffect } from "react";
import { IAccordionProps } from "./Accordion";
export type AccordionDetailProps = {
  children: ReactElement<IAccordionProps> | ReactElement<any>[];
  isOpen?: boolean;
  expanded?: boolean;

};
function AccordionDetail(props: AccordionDetailProps) {
  const [height, setHeight] = useState<number>(0);
  const detailRef = useRef<HTMLDivElement>(null);
  let detailEl = detailRef.current as HTMLDivElement;
  console.log(height)
  useEffect(() => {
    if (props.isOpen) {
      // const detailEl = detailRef.current as HTMLDivElement;


      setHeight(detailEl?.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [props.isOpen]);




  useEffect(() => {

    if (props.expanded) {
      const detailEl = detailRef.current as HTMLDivElement;
      setHeight(prev => prev + detailEl?.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [props.expanded]);

  return (
    <div

      //style={{height}}
      ref={detailRef}
      //style={{height : props.isOpen ? 'auto' : height}}
      className= {`accordion-detail-container ${ props.isOpen ? 'active' : ''}`}
    >
      <div

      className="accordion-detail-container-content">{props.children
        ? Children.map(props.children, (child: ReactElement<IAccordionProps>) => {

          return cloneElement(child)
        }

          )
        : props.children}</div>
    </div>
  );
}

export default AccordionDetail;
