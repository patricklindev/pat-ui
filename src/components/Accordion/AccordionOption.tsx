import React, { ReactElement, ReactNode, useEffect, useState } from "react"; 
import Icon from "../Icon";
import { IIconProps } from "../Icon/Icon";

export interface IAccordionOption {
    summary: ReactNode;
    detail: ReactNode;
    expandIcon?: ReactElement<IIconProps>;
    expandProp?: boolean;
    onChange?: ()=>void;
}

export default function AccordionOption({summary="", detail="", expandIcon=<Icon name="angle down"/>, expandProp=false, onChange=()=>{}}: IAccordionOption):JSX.Element {
    const [expanded, setExpanded] = useState<boolean>(expandProp)

    useEffect(()=> {
        onChange()
    } ,[expanded])

    function onToggle(e: React.MouseEvent) {
        setExpanded(!expanded)
    }

    // expanded ? "accordion__expanded": "">
    return <div className={(expanded ? "accordionOption-expanded" : "accordionOption")}>
        <div onClick={onToggle} className={(expanded ? "accordionOption__summary-bar-expanded" : "accordionOption__summary-bar")}>
            <div className="accordionOption__summary">{summary}</div>
            <div role="icon" className="accordionOption__expandIcon">{expandIcon}</div>
        </div>
        <div role="detail" className="accordionOption__detail" aria-expanded={!expanded}>{detail}</div>
    </div>
}
