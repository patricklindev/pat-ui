import React, {
  FC,
  useState,
  ReactNode,
} from 'react';
import { useEffect } from 'react';
import './_Accordion.scss'


export interface IAccordionProps {
  /** set class name */
  className?: string;
  /** set accordion title */
  title?: ReactNode;
  /** set accordion content */
  content?:  ReactNode;
  /** set accordion expand icon */
  expandIcon?: ReactNode;
  /** set accordion collapse icon */
  collapseIcon?: ReactNode;
  /** set accordion disabled */
  disabled?: boolean;
  /** set accordion expanded by default */
  expanded?: boolean;
  /** set accordion expanded by default */
  controlledExpanded?: boolean;
  /** listen to expand and collapse */
  id?: string;
  onChange?: (expanded: boolean) => void;
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
    expanded,
    controlledExpanded,
    onChange,
    ...rest
  } = props;

  const [expand, setExpand] = useState(expanded);

  const closeAll = () => {
    setExpand(!expand)
  }
  const toggle = (e, controlledExpanded) => {
    if(controlledExpanded){
      closeAll()
    }
    if (!disabled && !controlledExpanded) {
      setExpand(!expand);
      onChange && onChange(!expand);
    } else if (e && controlledExpanded === true){
      setExpand(!expand)
    } else if (!e && controlledExpanded === false){
      setExpand(expand)

    }
  }

    return (
      <div className={`accordion ${disabled && 'disabled'}`} onClick={(e) => toggle(e, controlledExpanded)}>
      <div className='accordion-header'>
        <div className="accordion-title">
          {props.title}
        </div>
        <div className={`accordion-icon ${expand ? 'open' : 'close'}`}>
          {expand ? collapseIcon : expandIcon}
        </div>
      </div>
      <div className={`accordion-content ${expand ? 'show' : 'hidden' }`}>
        {props.content}
      </div>
    </div>
  );

}

Accordion.defaultProps = {
  disabled: false,
}

export default Accordion;