import React, { useState, ReactNode } from 'react';
import AccordionItem from './AccordionItem';
import './Accordion.css';

type AccordionData = {
  title: string;
  content: ReactNode | string;
  disabled: boolean;
};

interface AccordionProps {
  items: Array<AccordionData>;
  expansionType?: string;
}

function Accordion({
  items,
  expansionType = 'basic',
}: AccordionProps): JSX.Element {
  const [currentIdx, setCurrentIdx] = useState<number>(-1);
  const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };

  if (expansionType === 'basic') {
    return (
      <div className="container">
        <ul className="accordion">
          {items.map((item, idx) => (
            <AccordionItem
              key={idx}
              data={item}
              disabled={item.disabled || false}
              isOpen={idx === currentIdx}
              btnOnClick={() => btnOnClick(idx)}
              expansionType={expansionType}
            />
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="container">
        <ul className="accordion">
          {items.map((item, idx) => (
            <AccordionItem
              key={idx}
              data={item}
              disabled={item.disabled || false}
              isOpen={false}
              expansionType={expansionType}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Accordion.defaultProps = {
  items: [
    { title: 'accordion1', content: 'accordion1 content data' },
    { title: 'accordion2', content: 'accordion2 content data' },
    { title: 'accordion3', content: 'accordion3 content data' },
  ],
  expansionType: 'basic',
};

export default Accordion;
