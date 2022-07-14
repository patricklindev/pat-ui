import React, { FC, useState, ReactNode } from 'react';
import './_Accordion.scss';

export interface IAccordionProps {
  /** set class name */
  className?: string;
  /** set accordion title */
  title?: ReactNode;
  /** set accordion id */
  id?: ReactNode;
  /** set accordion content */
  content?: ReactNode;
  /** set accordion expand icon */
  expandIcon?: ReactNode;
  /** set accordion collapse icon */
  collapseIcon?: ReactNode;
  /** set accordion disabled */
  disabled?: boolean;
  /** set accordion expanded by default */
  defExpanded?: boolean;
  /** set multi accordions */
  multiple?: boolean;
  // controlled nums of accordion
  controlledNum?: number;

  accordionArr?: [];

  onChange: () => void;
}

export const Accordion: FC<IAccordionProps> = (props) => {
  const {
    className,
    id,
    title,
    content,
    expandIcon,
    collapseIcon,
    disabled,
    defExpanded,
    accordionArr,
    controlledNum,
    multiple,
    onChange,
    ...rest
  } = props;

  const createNumsCheckBoxData = (num) => {
    return new Array(num).fill(0).map((_, index) => {
      let arrIndex = index;
      return {
        id: (Math.random() * 1000).toString(16),
        isOpen: false,
        accordionObj: {
          title: accordionArr.map((item, index) =>
            index === arrIndex ? item.title : null
          ),
          content: accordionArr.map((item, index) =>
            index === arrIndex ? item.content : null
          ),
        },
      };
    });
  };

  const [accordions, setAccordions] = useState(
    createNumsCheckBoxData(controlledNum)
  );

  const handleClick = (id) => {
    if (disabled) return;
    if (multiple) {
      setAccordions(
        accordions.map((accordion) => {
          if (accordion.id === id) {
            return {
              ...accordion,
              isOpen: !accordion.isOpen,
            };
          }
          return {
            ...accordion,
            isOpen: false,
          };
        })
      );
    } else {
      setAccordions(
        accordions.map((accordion) => {
          if (accordion.id === id) {
            return {
              ...accordion,
              isOpen: !accordion.isOpen,
            };
          }
          return accordion;
        })
      );
    }
    if (onChange) {
      onChange(accordions);
    }
  };

  return accordions.map((item) => {
    return (
      <div
        key={item.id}
        className={`accordion ${disabled && 'disabled'}`}
        onClick={() => handleClick(item.id)}
      >
        <div className="accordion-header">
          <div className="accordion-title">{item.accordionObj.title}</div>
          <div className={`accordion-icon ${item.isOpen ? 'open' : 'close'}`}>
            {item.isOpen ? collapseIcon : expandIcon}
          </div>
        </div>
        <div className={`accordion-content ${item.isOpen ? 'show' : 'hidden'}`}>
          {item.accordionObj.content}
        </div>
      </div>
    );
  });
};

Accordion.defaultProps = {
  disabled: false,
  controlledNum: 3,
  accordionArr: [
    { title: 'accordion1', content: 'accordion1' },
    { title: 'accordion2', content: 'accordion2' },
    { title: 'accordion3', content: 'accordion3' },
  ],
};

export default Accordion;
