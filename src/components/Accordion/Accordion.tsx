import React, {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  FC,
  MouseEvent,
} from 'react';
import {useState, useEffect, useRef} from 'react'
import './_Accordion.scss'
import Icon from '../Icon';
import {accordionDataMultiple} from './AccordionData/multipleData'

export type AccordionType =
  | 'default'

  export interface IButtonProps {
    /** set customized style */
    className?: string;
    /** set accordion type */
    accordionType?: AccordionType;
    /** set disabled button */
    disabled?: boolean;
  }

type NativeButtonProps = IButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type NativeAchorButtonProps = IButtonProps &
AnchorHTMLAttributes<HTMLAnchorElement>;
export type PatButtonProps = NativeButtonProps | NativeAchorButtonProps;


export const Accordion: FC<PatButtonProps> = (props) => {
  const {accordionType, children, disabled, className, ...rest } = props;
  const [isActive, setIsActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);


  const toggleAccordion = (index) => {
    if(activeIndex === index){
      setActiveIndex(-1)
    } else {
      setActiveIndex(index)
    }
  }

  let acrd;
  if (accordionType === 'default' && !disabled) {
    acrd = (
      <div>
      {accordionDataMultiple.map((item, index) => {
         const isActive = index === activeIndex
        return (
          <button 
          key={item.id}
          className="btn-accordion">
           <div className="accordion accordion-item">
            <div
              className="accordion accordion-title"
              onClick={() => toggleAccordion(index)}
            >
              <div>{item.title}</div>
              <Icon
                className={`chevron-down ${isActive ? 'up' : 'down'}`}
                name='angle down'
              />
            </div>
            <div className={`accordion accordion-content ${ + isActive ? 'active' : 'hidden'}`}>{item.content}</div>
          </div>
        </button>
    )})}
  </div>
  );
  } else if (disabled) {
      return(
        <button 
        className="btn-accordion accordion-disabled">
         <div className="accordion accordion-item">
          <div
            className="accordion accordion-title"
            onClick={(e) => e.preventDefault()}
          >
            <div>{accordionDataMultiple[0].title}</div>
            <div>+</div>
          </div>
        </div>
      </button>
      )
  } 
  return acrd;
};

Accordion.defaultProps = {
  accordionType: 'default',
  disabled: false,
};

export default Accordion;