import React, {
  FC,
  useState,
  ReactNode,
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
  expanded?: boolean;
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
    expanded,
    onChange,
    ...rest
  } = props;

  const [expand, setExpand] = useState(expanded);

  const toggle = () => {
    if (!disabled) {
      setExpand(!expand);
      onChange && onChange(!expand);
    }
  }


  return (
    <div className={`accordion ${disabled && 'disabled'}`}>
      <div className={`accordion-header ${disabled && 'disabled'}`} onClick={toggle}>
        <div className="accordion-title">
          { props.title}
        </div>
        <div className="accordion-icon">
          {expand ? collapseIcon : expandIcon}
        </div>
      </div>
      <div className={`accordion-content ${expand && 'show'}`}>
        {props.content}
      </div>
    </div>
  );
}

Accordion.defaultProps = {
  disabled: false,
}

export default Accordion;