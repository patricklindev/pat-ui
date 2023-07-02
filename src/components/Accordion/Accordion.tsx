import React, { FC, useState, InputHTMLAttributes } from 'react';
import { action } from '@storybook/addon-actions';
import test from './icon/expanded-down.svg'
import  up  from '../../asset/icon/expanded-up.svg';
import  down  from '../../asset/icon/expanded-down.svg';
import { type } from 'os';
export type AccordionType = 'default' | 'checkbox';
export interface IAccordionProps {
  /** set customized style */
  className?: string;
  /** set disabled Accordion */
  disabled?: boolean;
  /** set Accordion expanded */
  expanded?: boolean;
  /** set action on title clicked */
  onChange?: () => void;
  /**set Accordion title */
  title?: string
  /**set Accordion summary */
  summary?: string
  /**set Accordion expand icon */
  expandIcon?: string
  /**set Accordion retract icon */
  retractIcon?: string
  /**set Accordion type */
  type?: AccordionType
}
export type patAccordionProps = IAccordionProps;
export const Accordion: FC<patAccordionProps> = (props) => {
  const { expanded, disabled, title,summary,onChange,type, ...rest } = props;
  let initialState: boolean = expanded === undefined ? false : expanded;
  const [show, setShow] = useState<boolean | false>(initialState);
  const handleDefaultClick = () => {
    setShow(!show);
  };
  const isExpanded:string = show ? 'isExpanded'  : ''
  const isDisabled:string = disabled ? 'isDisabled' : ''
  const isControlExpanded:string = props.expanded ? 'isExpanded' : ''
  // const title = props.title !== undefined ? props.title : 'Need A Title'
  let accordion;
  console.log(type=== 'checkbox')
  if (props.onChange === undefined) {
    accordion = (
      <div className={`accordion ${isExpanded} ${isDisabled}`}>
        <div className="accordion title-container">
          {type === 'checkbox' &&  <input  className="title-checkbox" type={type}/>}
          <button 
            className={`accordion title ` }
            onClick={handleDefaultClick}
            disabled={disabled}
          >
            <div className="accordion title-summary">
              <p className="accordion title-information">{title}</p>   
              <p className="accordion title-additional">{summary}</p>
              <img className="accordion title-icon" src={isExpanded ? props.retractIcon: props.expandIcon} alt='mySvgImage' />
            </div>
          </button>
        </div >
        

        {show ?  <p className="accordion accordion-description">{props.children}</p> : <p className="accordion accordion-description hidden">{props.children}</p>}
      </div>
    );
  } else {
    accordion = (
      <div  className={`accordion ${isControlExpanded} ${isDisabled}`}>
        <div className="accordion title-container">
          {type === 'checkbox' &&  <input  className="title-checkbox" type={type}/>}
          <button className={`accordion title ` } onClick={onChange} disabled={disabled}><div className="accordion title-summary">
             <p className="accordion title-information">{title}</p>
              <p className="accordion title-additional">{summary}</p>
             <img className="accordion title-icon" src={isExpanded ? props.retractIcon: props.expandIcon} alt='mySvgImage' />
            </div>
        </button>
        </div >
        
        {props.expanded ? <p className="accordion accordion-description">{props.children}</p> : <p className="accordion accordion-description hidden">{props.children}</p>}
      </div>
    );
  }
  return accordion;
};

Accordion.defaultProps = {
  title:'Summary text',
  summary:"",
  expandIcon:down,
  retractIcon:up,
  type:"default",
};

export default Accordion;
