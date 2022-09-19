import React, { useRef, useState, useEffect } from "react";



type AccordionDetailProps = {
  children: JSX.Element;
  isOpen?: boolean;
  expanded?: boolean;
};
function AccordionDetail(props: AccordionDetailProps) {
  const [height, setHeight] = useState(0);
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (props.isOpen) {
      const detailEl = detailRef.current as HTMLDivElement;
      setHeight(detailEl?.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [props.isOpen]);
  useEffect(() => {

    if (props.expanded) {
      console.log('useffectt')
      const detailEl = detailRef.current as HTMLDivElement;
      setHeight(detailEl?.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [props.expanded]);

  return (
    <div
      ref={detailRef}
      style={{ height }}
      className= 'accordion-detail-container'
    >
      <div className="accordion-detail-container-content">{props.children}</div>
    </div>
  );
}

export default AccordionDetail;
