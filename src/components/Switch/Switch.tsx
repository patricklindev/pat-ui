import React, { ChangeEvent, FC, useState } from "react";

export type SwitchColor = "primary" | "secondary" | "default"
export type SwitchSize = "medium" | "small"

export interface ISwitchProps {
    // customize the color
    color?: SwitchColor;
    // customize the size
    size?: SwitchSize;
    // provide a label
    label?: string;
    // turn on or turn off
    checked?: boolean;
    // action when triggered
    onChange?: (event: ChangeEvent) => void;
    // disabled or not
    disabled?: boolean;
}

export type SwitchProps = ISwitchProps

export const Switch: FC<ISwitchProps> = ({ color = "default", size = "medium", label, checked = false, onChange, disabled = false }) => {
    // const [isClicked, setIsClicked] = useState(checked)

    const handleChange = (event: ChangeEvent) => {
        onChange?.(event)
    }

    const createClassName = () => {
        if (disabled) {
            return "switch"
        }
        const colorName = `switch--${color}`
        const sizeName = `switch--${size}`
        return ["switch", colorName, sizeName].join(" ")
    }

    return (
        <label className={createClassName()} data-testid="switch">
            <input
                className="switch-input"
                type="checkbox"
                onChange={handleChange}
                defaultChecked={checked}
                disabled={disabled}
                data-testid="switch-input"
            />
            <span className="switch-span--round" data-testid="switch-span"></span>
            <span className="switch-label" data-testid="switch-label">{label}</span>
        </label>
    )
}

export default Switch
