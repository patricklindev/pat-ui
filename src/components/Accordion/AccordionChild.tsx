import React, { useState, FC } from 'react';
import { AccordionData } from './types';
import AccordionItem from './AccordionItem';
import './AccordionChild.css';

interface IAccordionProps {
  items: Array<AccordionData>;
}
export const Accordion: FC<IAccordionProps> = (props) => {
  const [currentIdx, setCurrentIdx] = useState(-1);
  const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };

  const { items } = props;
  return (
    <ul className="accordion">
      {/* <AccordionItem
        key={0}
        data={items[0]}
        isOpen={0 === currentIdx}
        btnOnClick={() => btnOnClick(0)}
        disabled={false}
      />
      <AccordionItem
        key={1}
        data={items[1]}
        isOpen={1 === currentIdx}
        btnOnClick={() => btnOnClick(1)}
        disabled={false}
      />
      <AccordionItem
        key={2}
        data={items[2]}
        isOpen={2 === currentIdx}
        btnOnClick={() => btnOnClick(2)}
        disabled
      /> */}
      {items.map((item, idx) => (
        <AccordionItem
          id={idx}
          key={idx}
          data={item}
          isOpen={idx === currentIdx}
          btnOnClick={() => btnOnClick(idx)}
        />
      ))}
    </ul>
  );
};

// function Accordion({ items }: { items: Array<AccordionData> }) {
//   const [currentIdx, setCurrentIdx] = useState(-1);
//   const btnOnClick = (idx: number) => {
//     setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
//   };

//   return (
//     <ul className="accordion">
//       {items.map((item, idx) => (
//         <AccordionItem
//           key={idx}
//           data={item}
//           isOpen={idx === currentIdx}
//           btnOnClick={() => btnOnClick(idx)}
//         />
//       ))}
//     </ul>
//   );
// }

export default Accordion;
