import React from 'react';

import { render, fireEvent, screen, cleanup  } from '@testing-library/react';
import Pagination from './Pagination';
import { ControlledPagination } from './Pagination.stories';

describe("Pagination", () => {
    afterEach(cleanup);
    // Snapshot test
    it('should match snapshot', () => {
        const { asFragment } = render(<Pagination />);
        expect(asFragment()).toMatchSnapshot();
    });

    // Test default paginatin component
    // basic functionality test
    it("should render default pagination", () => {
        const wrapper = render(<Pagination count={10}/>);
        const element = wrapper.getByTestId("pagination");
        const prevBtn = wrapper.getByTestId("prev-btn");
        const nextBtn = wrapper.getByTestId("next-btn");
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent("...");
        expect(prevBtn).toBeInTheDocument();
        expect(nextBtn).toBeInTheDocument();

        expect(element).toHaveClass('pagination');
        // why
        expect(element.childNodes.length).toBe(7);

        expect(prevBtn.firstChild).toHaveClass("disabled");
        expect(element.childNodes[1]).toHaveClass("selected");
    })

    it("should support changing pages by clicking button or page number button", () => {
        const wrapper = render(<Pagination count={10}/>);
        const btn = wrapper.queryByText("1") as HTMLElement;
        const nextBtn = wrapper.getByTestId("next-btn");
        const prevBtn = wrapper.getByTestId("prev-btn");
        expect(btn).toHaveClass("selected");

        prevBtn.click();
        expect(btn).toHaveClass("selected");

        nextBtn.click();
        expect(btn).not.toHaveClass("selected");
        const btn2 = wrapper.queryByText("2") as HTMLElement;
        expect(btn2).toHaveClass("selected");

        prevBtn.click();
        expect(btn).toHaveClass("selected");

        const btn10 = wrapper.queryByText("10") as HTMLElement;
        btn10.click();
        expect(btn10).toHaveClass("selected");
        expect(nextBtn.firstChild).toHaveClass("disabled");
    })

    // edge case
    it("should render edge case", () => {
        const wrapper = render(<Pagination count={1}/>);
        const nextBtn = wrapper.getByTestId("next-btn");
        const prevBtn = wrapper.getByTestId("prev-btn");
        expect(nextBtn.firstChild).toHaveClass("disabled");
        expect(prevBtn.firstChild).toHaveClass("disabled");
    })

    // class test
    it("should render components based on different props", () => {
        const outlined_primary_wrapper = render(<Pagination type="outlined" color="primary" />);
        let element = outlined_primary_wrapper.getByTestId("pagination");
        expect(element).toHaveClass("page-outlined");
        expect(element).toHaveClass("page-primary");
        outlined_primary_wrapper.unmount();

        const outlined_secondary_wrapper = render(<Pagination type="outlined" color="secondary" />);
        element = outlined_secondary_wrapper.getByTestId("pagination");
        expect(element).toHaveClass("page-outlined");
        expect(element).toHaveClass("page-secondary");
        outlined_secondary_wrapper.unmount();

        const filled_primary_wrapper = render(<Pagination type="filled" color="primary" />);
        element = outlined_secondary_wrapper.getByTestId("pagination");
        expect(element).toHaveClass("page-filled");
        expect(element).toHaveClass("page-primary");
        filled_primary_wrapper.unmount();

        const filled_secondary_wrapper = render(<Pagination type="filled" color="secondary" />);
        element = outlined_secondary_wrapper.getByTestId("pagination");
        expect(element).toHaveClass("page-filled");
        expect(element).toHaveClass("page-secondary");
        filled_secondary_wrapper.unmount();
    })

    // disabled pagination test
    it("should render disabled pagination component", () => {
        const wrapper = render(<Pagination disabled count={10}/>);
        const nextBtn = wrapper.getByTestId("next-btn");

        nextBtn.click();
        const btn = wrapper.queryByText("1") as HTMLElement;
        expect(btn).toHaveClass("selected");

        const btn10 = wrapper.queryByText("10") as HTMLElement;
        btn10.click();
        expect(btn).toHaveClass("selected");
    })

    // Controlled pagination
    it("should enable developers to decide current page", () => {
        const wrapper = render(<ControlledPagination />);

        const btn1 = wrapper.queryByText("1") as HTMLElement;
        expect(btn1).toHaveClass("selected");

        fireEvent.change(screen.getByTestId('input'), { target: { value: '2' } });
        const btn2 = wrapper.queryByText("2") as HTMLElement;
        expect(btn2).toHaveClass("selected");

        fireEvent.change(screen.getByTestId('input'), { target: { value: '10' } });
        const btn3 = wrapper.queryByText("10") as HTMLElement;
        expect(btn3).toHaveClass("selected");
    })
})