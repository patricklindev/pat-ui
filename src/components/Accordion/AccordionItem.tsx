import React, { useEffect, useRef, useState } from 'react';
import './Accordion.css';
import { AccordionDataProps } from './Accordion';

interface AccordionItemsProps {
  data: AccordionDataProps;
  isOpen: boolean;
  disabled?: boolean;
  btnOnClick?: () => void;
  expansionType?: string;
  optionalStyles: React.CSSProperties;
  expandIcon: string;
}

function AccordionItem(props: AccordionItemsProps): JSX.Element {
  const {
    data,
    isOpen,
    disabled = true,
    btnOnClick,
    expansionType = 'basic',
    optionalStyles = {},
    expandIcon = '',
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

  const defaultIcon =
    'https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png';

  return (
    <li
      className={`accordion-item ${
        expansionType === 'basic'
          ? isOpen
            ? 'active'
            : ''
          : open
          ? 'active'
          : ''
      }`}
    >
      <h2 className={`accordion-item-title ${disabled ? 'disabled' : ''}`}>
        <button
          className="accordion-item-btn"
          onClick={expansionType === 'basic' ? btnOnClick : handleToggle}
          disabled={disabled ? true : false}
          style={optionalStyles}
        >
          {data.title}
          <img src={expandIcon !== '' ? expandIcon : defaultIcon} alt="" />
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

export default AccordionItem;
