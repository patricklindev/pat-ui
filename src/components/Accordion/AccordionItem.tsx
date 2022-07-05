import React, { useEffect, useRef, useState, FC } from 'react';
import { getRefValue } from './hooks';
import { AccordionData } from './types';
import './AccordionItem.css';
import { accordionItems } from './AccordionItemData';

interface IAccordionItemProps {
  id: number;
  data: AccordionData;
  isOpen: boolean;
  btnOnClick: () => void;
}
export const AccordionItem: FC<IAccordionItemProps> = (props) => {
  const { data, isOpen, btnOnClick, id } = props;
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = getRefValue(contentRef);

      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <li className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <h2 className="accordion-item-title">
        <button
          disabled={id === accordionItems.length - 1}
          className="accordion-item-btn"
          onClick={btnOnClick}
        >
          {data.title}
        </button>
      </h2>
      <div className="accordion-item-container" style={{ height }}>
        <div ref={contentRef} className="accordion-item-content">
          {data.content}
        </div>
      </div>
    </li>
  );
};
// function AccordionItem({
//   data,
//   isOpen,
//   btnOnClick,
// }: {
//   data: AccordionData;
//   isOpen: boolean;
//   btnOnClick: () => void;
// }) {
// const contentRef = useRef<HTMLDivElement>(null);
// const [height, setHeight] = useState(0);

// useEffect(() => {
//   if (isOpen) {
//     const contentEl = getRefValue(contentRef);

//     setHeight(contentEl.scrollHeight);
//   } else {
//     setHeight(0);
//   }
// }, [isOpen]);

// return (
//   <li className={`accordion-item ${isOpen ? 'active' : ''}`}>
//     <h2 className="accordion-item-title">
//       <button className="accordion-item-btn" onClick={btnOnClick}>
//         {data.title}
//       </button>
//     </h2>
//     <div className="accordion-item-container" style={{ height }}>
//       <div ref={contentRef} className="accordion-item-content">
//         {data.content}
//       </div>
//     </div>
//   </li>
// );
// }

export default AccordionItem;
