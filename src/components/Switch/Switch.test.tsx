import { render, screen } from "@testing-library/react";
import React from "react";
import Switch, { SwitchProps } from "./Switch";

describe("Switch", () => {
    test("should match snapshot", () => {
        const view = render(<Switch />)
        expect(view.asFragment()).toMatchSnapshot()
    })

    test("should render default switch", () => {
        render(<Switch label="default switch" />)
        const switchElem = screen.getByTestId("switch")
        const switchInput = screen.getByTestId("switch-input")
        const switchSpan = screen.getByTestId("switch-span")
        expect(switchElem).toBeInTheDocument()
        expect(switchInput).toBeInTheDocument()
        expect(switchSpan).toBeInTheDocument()
    })

    test("should render primary switch", () => {
        const props: SwitchProps = {
            color: "primary",
            size: "medium"
        }
        render(<Switch {...props} />)
        const switchElem = screen.getByTestId("switch")
        expect(switchElem).toHaveClass("switch")
        expect(switchElem).toHaveClass("switch--primary")
        expect(switchElem).toHaveClass("switch--medium")
    })

    test("should render secondary switch", () => {
        const props: SwitchProps = {
            color: "secondary",
            size: "medium"
        }
        render(<Switch {...props} />)
        const switchElem = screen.getByTestId("switch")
        expect(switchElem).toHaveClass("switch")
        expect(switchElem).toHaveClass("switch--secondary")
        expect(switchElem).toHaveClass("switch--medium")
    })

    test("should render small switch", () => {
        const props: SwitchProps = {
            color: "primary",
            size: "small"
        }
        render(<Switch {...props} />)
        const switchElem = screen.getByTestId("switch")
        expect(switchElem).toHaveClass("switch")
        expect(switchElem).toHaveClass("switch--primary")
        expect(switchElem).toHaveClass("switch--small")
    })

    test("should render checked switch", () => {
        const props: SwitchProps = {
            color: "primary",
            size: "medium",
            checked: true
        }
        render(<Switch {...props} />)
        const switchInput = screen.getByTestId("switch-input")
        expect(switchInput).toBeChecked()
    })

    test("should render disabled switch", () => {
        const props: SwitchProps = {
            color: "primary",
            size: "medium",
            disabled: true
        }
        render(<Switch {...props} />)
        const switchInput = screen.getByTestId("switch-input")
        expect(switchInput).toHaveAttribute("disabled")
    })
})
