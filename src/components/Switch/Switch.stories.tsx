import React from "react";
import Switch from "./Switch";

export default {
    title: "Switch",
    component: Switch
}

export const DefaultSiwtch = () => {
    return (
        <Switch />
    )
}

export const DiffColorSwitch = () => {
    return (
        <div>
            <Switch color="primary" />
            <Switch color="secondary" />
        </div>
    )
}

export const DiffSizeSwitch = () => {
    return (
        <div>
            <Switch size="medium" />
            <Switch size="small" />
        </div>
    )
}

export const DiffTypeSwitch = () => {
    return (
        <div>
            <Switch disabled />
            <Switch checked={false} />
            <Switch checked={true} />
        </div>
    )
}
