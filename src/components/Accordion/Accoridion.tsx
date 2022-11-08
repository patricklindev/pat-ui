import React, { ReactElement, ReactNode, useEffect, useState } from "react"; 
import { IAccordionOption } from "./AccordionOption";

export interface IAccordion {
  children?: | ReactElement<IAccordionOption> | ReactElement<IAccordionOption>[];
}

export default function Accordion(props: IAccordion) {
    return <div className="accordion">
        {props.children}
    </div>
}
