import React, { useState, ReactNode } from 'react';
import AccordionItem from './AccordionItem';
import './Accordion.css';

export interface AccordionDataProps {
  /** set accordion item header */
  title: string;
  /** set content to display/hide */
  content: ReactNode | string;
  /** set disabled content */
  disabled: boolean;
}

export interface AccordionProps {
  /** set content data*/
  items: Array<AccordionDataProps>;
  /** set expansion type */
  expansionType?: string;
  /** set custom styles */
  optionalStyles: React.CSSProperties;
  /** set custom expandIcon */
  expandIcon: string;
}
/**
 * An Accordion is used to selectively show or hide content.
 *
 * ```js
 * import {Accordion} from 'pat-ui'
 * ```
 */

function Accordion({
  items,
  expansionType = 'basic',
  optionalStyles,
  expandIcon,
}: AccordionProps): JSX.Element {
  const [currentIdx, setCurrentIdx] = useState<number>(-1);
  const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };

  return (
    <div className="container">
      <ul className="accordion">
        {items.map((item, idx) => (
          <AccordionItem
            key={idx}
            data={item}
            disabled={item.disabled || false}
            isOpen={expansionType === 'basic' ? idx === currentIdx : false}
            btnOnClick={
              expansionType === 'basic' ? () => btnOnClick(idx) : () => void 0
            }
            expansionType={expansionType}
            optionalStyles={optionalStyles}
            expandIcon={expandIcon}
          />
        ))}
      </ul>
    </div>
  );
}

Accordion.defaultProps = {
  items: [
    { title: 'accordion1', content: 'accordion1 content data' },
    { title: 'accordion2', content: 'accordion2 content data' },
    {
      title: 'accordion3 - disabled',
      content: 'accordion3 content data',
      disabled: true,
    },
    { title: 'accordion4', content: 'accordion4 content data' },
  ],
  expansionType: 'basic',
  optionalStyles: {},
  expandIcon: '',
};

export default Accordion;
