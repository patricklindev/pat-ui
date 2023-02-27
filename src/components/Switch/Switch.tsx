import React from 'react';

export type SwitchSize = 'medium' | 'small';

export type SwithColor = 'default'
| 'primary'
| 'secondary';

export interface SwitchProps {
    color?: SwithColor,
    size?: SwitchSize,
    label?: string,
    disabled?: boolean,
    checked?: boolean
}

const Switch = (props: SwitchProps) => {
    const { color, size, label, checked, disabled, ...rest } = props;

};

export default Switch;