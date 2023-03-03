import React, { FC, useEffect, useRef, useState } from "react";

export interface IAccordionProps {
  /** set default expanded/retracted */
  expanded?: boolean;
  /** set disabled accordion */
  disabled?: boolean;
  /** set customized accordion event */
  onChange?: (event: React.SyntheticEvent, expanded: boolean) => void;
  /** text header for accordion*/
  header: string | React.ReactNode;
  /** customize accordion className*/
  accordionClassName?: string;
  /** customize header className*/
  headerClassName?: string;
  /** customize title className*/
  titleClassName?: string;
  /** customize icon contatiner className*/
  iconContainerClassName?: string;
  /** customize icon className*/
  iconClassName?: string;
  /** customize content container className*/
  contentContainerClassName?: string;
  /** customize content className*/
  contentClassName?: string;
}

export type patAccordionProps = IAccordionProps;

export const Accordion: FC<patAccordionProps> = (props) => {
    const {
        expanded,
        disabled,
        onChange,
        accordionClassName = expanded
          ? "accordion-card-expanded"
          : "accordion-card-retracted",
        headerClassName = "accordion-header",
        titleClassName = "title-text",
        iconContainerClassName = "icon-container",
        iconClassName = "arrow",
        contentClassName = "accordion-content",
        contentContainerClassName = "accordion-content-container",
        children,
        header
       } = props;
  const [isExpanded, setIsExpanded] = useState(expanded);
  const [height, setHeight] = useState<number | undefined>(
    expanded ? undefined : 0
  );
  const [className, setClassName] = useState(accordionClassName);
  const ref = useRef<HTMLDivElement>(null);
  
  const handleExpandingAndRetracting = (event:any) => {
    setIsExpanded((prev) => !prev);
    if (onChange) {
      onChange(event, !expanded);
    }
  };

  useEffect(() => {
    if (isExpanded) {
      setHeight(ref.current?.getBoundingClientRect().height);
      setClassName("accordion-card-expanded");
    } else {
      setHeight(0);
      setClassName("accordion-card-retracted");
    }
  }, [isExpanded]);

  useEffect(() => {
    setIsExpanded(expanded);
  }, [expanded]);


  return (
    <>
    {disabled ? 
    <div className={"accordion-card-disabled"} data-testid='accordion-element-disabled'>
        <div>
          <div className={headerClassName}>
            <div className={titleClassName}>{header}</div>
            <span className={iconContainerClassName}>
            <div className={iconClassName} />
            </span>
          </div>
        </div>
      </div>
        : 
      <div className={className} data-testid='accordion-element'>
        <div>
          <div className={headerClassName} onClick={handleExpandingAndRetracting} data-testid='accordion-header'>
            <div className={titleClassName} data-testid='accordion-title'>{header}</div>
            <span className={iconContainerClassName}>
            <i className={iconClassName} />
            </span>
          </div>
        </div>
        <div className={contentClassName} style={{ height }}>
          <div ref={ref}>
            <div className={contentContainerClassName}>{children}</div>
          </div>
        </div>
      </div>
}   
    </>
  );
};

Accordion.defaultProps = {
    header: "placeholder",
};

export default Accordion;
