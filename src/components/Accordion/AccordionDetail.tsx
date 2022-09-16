import React, { useRef, useState, useEffect } from "react";
import "./AccordionDetail.scss";


type AccordionDetailProps = {
  children: JSX.Element;
  isOpen?: boolean;
};
function AccordionDetail(props: AccordionDetailProps) {
  const [height, setHeight] = useState(0);
  const detailRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (props.isOpen) {
      const detailEl = detailRef.current as HTMLDivElement;
      console.log(detailEl?.scrollHeight);
      setHeight(detailEl?.scrollHeight);
    } else {
      console.log("elsedyizz");
      setHeight(0);
    }
  }, [props.isOpen]);
  return (
    <div
      ref={detailRef}
      style={{ height }}
      className="accordion-detail-container"
    >
      <div className="accordion-detail-container-content">{props.children}</div>
    </div>
  );
}

export default AccordionDetail;
