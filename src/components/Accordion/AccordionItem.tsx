import React, { useEffect, useRef, useState, ReactNode } from 'react';
import './Accordion.css';

type AccordionData = {
  title: string;
  content: ReactNode | string;
  disabled: boolean;
};

interface AccordionItemsProps {
  data: AccordionData;
  isOpen: boolean;
  disabled?: boolean;
  btnOnClick?: () => void;
  expansionType?: string;
}

function AccordionItem(props: AccordionItemsProps): JSX.Element {
  const {
    data,
    isOpen,
    disabled = true,
    btnOnClick,
    expansionType = 'basic',
  } = props;
  const contentRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(isOpen);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current as HTMLDivElement;
      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const handleToggle = () => {
    setOpen((prev: boolean) => !prev);
  };

  useEffect(() => {
    if (open) {
      const contentEl = contentRef.current as HTMLDivElement;
      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [open]);

  if (expansionType === 'basic') {
    return (
      <li className={`accordion-item ${isOpen ? 'active' : ''}`}>
        <h2 className={`accordion-item-title ${disabled ? 'disabled' : ''}`}>
          <button
            className="accordion-item-btn"
            onClick={btnOnClick}
            disabled={disabled ? true : false}
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
  } else {
    return (
      <li className={`accordion-item ${open ? 'active' : ''}`}>
        <h2 className="accordion-item-title">
          <button
            className="accordion-item-btn"
            onClick={handleToggle}
            disabled={disabled ? true : false}
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
  }
}

export default AccordionItem;
