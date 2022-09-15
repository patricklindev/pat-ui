import React, { FC, CSSProperties, ReactNode } from 'react';

export interface IDialogOptionProps {
    /** children must be React Element */
    children?: ReactNode;
    /** set customized css class */
    className?: string;
    /** set customized css style */
    cssStyle?: CSSProperties;
    /** callback provided by Dropdown */
    setSelected?: (val: string, children: ReactNode) => void;
    /** value for this option */
    value?: any;
    /** is the active / default option */
    active?: boolean;
  }