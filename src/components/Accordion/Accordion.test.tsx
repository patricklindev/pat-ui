import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Icon from "../Icon";
import AccordionOption from "./AccordionOption";
import Accordion from "./Accoridion";

describe("Accordion", ()=> {
    it("should match snapshot", ()=>{
        const {asFragment} = render(
            <Accordion>
                <AccordionOption
                summary="SnapShot"
                detail="SnapShot"
                />
            </Accordion>
        )
        expect(asFragment()).toMatchSnapshot();
    })

    it("should render summary and expandIcon", ()=>{
        const wrapper = render(
            <Accordion>
                <AccordionOption
                summary="summary"
                detail="detail"
                />
            </Accordion>
        )
        expect(wrapper.queryByText("summary")).toBeInTheDocument();
        expect(wrapper.queryByRole("icon")).toBeInTheDocument();
    })
    
    it("should render detail", ()=> {
        const wrapper = render(
            <Accordion>
                <AccordionOption
                summary="summary"
                detail="detail"
                expandProp={true}
                />
            </Accordion>
        )
        expect(wrapper.queryByText("detail")).toHaveAttribute("aria-expanded", "false");
    })

    it("should not render detail", ()=> {
        const wrapper = render(
            <Accordion>
                <AccordionOption
                summary="summary"
                detail="detail"
                expandProp={false}
                />
            </Accordion>
        )
        expect(wrapper.queryByText("detail")).not.toHaveAttribute("aria-expanded", "false");
    })

    it("call back function should be called", ()=>{
        const defaultProps = {
            summary: "summary",
            detail: "detail",
            expandProp: false,
            onChange: jest.fn() 
        }
        const wrapper = render(
            <Accordion>
                <AccordionOption {...defaultProps}/>
            </Accordion>
        )
        expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
        fireEvent.click(wrapper.getByText("summary"));
        expect(defaultProps.onChange).toHaveBeenCalledTimes(2);
    })

    it("clicking should show detail component", ()=>{
        const wrapper = render(
            <Accordion>
                <AccordionOption
                summary="summary"
                detail="detail"
                expandProp={false}
                />
            </Accordion>
        )
        fireEvent.click(wrapper.getByText("summary"))
        expect(wrapper.queryByText("detail")).toHaveAttribute("aria-expanded", "false");
    })

    it("clicking should close detail component", ()=>{
        const wrapper = render(
            <Accordion>
                <AccordionOption
                summary="summary"
                detail="detail"
                expandProp={true}
                />
            </Accordion>
        )
        fireEvent.click(wrapper.getByText("summary"))
        expect(wrapper.queryByText("detail")).toHaveAttribute("aria-expanded", "true");
    })

    it("clicking the component multiple time works", ()=>{
        const wrapper = render(
            <Accordion>
                <AccordionOption
                summary="summary"
                detail="detail"
                expandProp={false}
                />
            </Accordion>
        )
        let expanded = false
        for (let i = 0; i < 10; i++) {
            fireEvent.click(wrapper.getByText("summary"))
            expanded = !expanded
            if (expanded) {
                expect(wrapper.queryByText("detail")).toHaveAttribute("aria-expanded", "false");
            } else {
                expect(wrapper.queryByText("detail")).toHaveAttribute("aria-expanded", "true");
            }
        }
    })
})