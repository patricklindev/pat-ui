import React, {
  FC,
  useState,
  ReactNode,
  useEffect,
} from 'react';


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
  expanded?:boolean;
  /** listen to expand and collapse */
  onChange?: (expanded: boolean) => void;
}


export const Accordion: FC<IAccordionProps> = (props) => {
  const {
    className,
    title,
    content,
    expandIcon,
    collapseIcon,
    disabled,
    onChange,
    expanded,
    ...rest
  } = props;

  const [isExpanded, setIsExpanded] = useState(expanded);


  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  useEffect(() => {
    if (onChange) {
      onChange(isExpanded);
    }
  } , [isExpanded, onChange]);

  return (
    <div className={`accordion ${disabled && 'disabled'}`}>
      <div className={`accordion-header ${disabled && 'disabled'}`} onClick={handleToggle}>
        <div className="accordion-title">
          { props.title}
        </div>
        <div className="accordion-icon">
          {isExpanded ? collapseIcon : expandIcon}
        </div>
      </div>
      <div className={`accordion-content ${ isExpanded && 'show'}`}>
        {props.content}
      </div>
    </div>
  );
}

Accordion.defaultProps = {
  disabled: false,
}

export default Accordion;