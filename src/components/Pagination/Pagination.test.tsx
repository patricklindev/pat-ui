import {fireEvent, render, screen} from "@testing-library/react";
import Message from "../Message";
import {IPaginationProps, Pagination} from "./Pagination";
import React from "react";

describe('Pagination', () => {
    it('should match snapshot', () => {
        const {asFragment} = render(<Message> Snapshot Message </Message>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render default pagination', () => {
        // Default message
        const paginationBasicProps: IPaginationProps = {
            type: 'default',
            currentPage: 4,
            pageSize: 10,
            total: 100
        }
        const wrapper = render(<Pagination {...paginationBasicProps}></Pagination>);
        const ulElement = wrapper.queryByTestId("pagination-element")
        expect(ulElement?.childNodes[4].firstChild).toHaveClass('pagination-btn pagination-btn-default');
    });

    it('should render primary pagination', () => {
        // Default message
        const paginationBasicProps: IPaginationProps = {
            type: 'primary',
            currentPage: 4,
            pageSize: 10,
            total: 100
        }
        const wrapper = render(<Pagination {...paginationBasicProps}></Pagination>);
        const ulElement = wrapper.queryByTestId("pagination-element")
        expect(ulElement?.childNodes[4].firstChild).toHaveClass('pagination-btn pagination-btn-primary');
    });

    it('should render small pagination', () => {
        // Default message
        const paginationBasicProps: IPaginationProps = {
            size: 'sm',
            currentPage: 4,
            pageSize: 10,
            total: 100
        }
        const wrapper = render(<Pagination {...paginationBasicProps}></Pagination>);
        const ulElement = wrapper.queryByTestId("pagination-element")
        expect(ulElement?.childNodes[4].firstChild).toHaveClass('pagination-btn pagination-btn-default pagination-btn-sm');
    });

    it('should render disabled pagination', () => {
        // Default message
        const paginationBasicProps: IPaginationProps = {
            disabled: true,
            currentPage: 4,
            pageSize: 10,
            total: 100
        }
        const wrapper = render(<Pagination {...paginationBasicProps}></Pagination>);
        const ulElement = wrapper.queryByTestId("pagination-element")
        expect(ulElement?.childNodes[4].firstChild).toHaveClass('pagination-btn pagination-btn-default disabled');
    });

    it('should render disabled pagination', () => {
        // Default message
        const paginationBasicProps: IPaginationProps = {
            disabled: true,
            currentPage: 4,
            pageSize: 10,
            total: 100
        }
        const wrapper = render(<Pagination {...paginationBasicProps}></Pagination>);
        const ulElement = wrapper.queryByTestId("pagination-element")
        expect(ulElement?.childNodes[4].firstChild).toHaveClass('pagination-btn pagination-btn-default disabled');
    });

    it('should render new props after click', () => {
        // Default message
        const paginationBasicProps: IPaginationProps = {
            currentPage: 4,
            pageSize: 10,
            total: 100
        }
        const wrapper = render(<Pagination {...paginationBasicProps}></Pagination>);
        const ulElement = wrapper.queryByTestId("pagination-element")
        expect(ulElement?.childNodes[4].firstChild).toHaveClass('pagination-btn pagination-btn-default');
        fireEvent.click(
            ulElement?.childNodes[5].firstChild as Element
        );
        expect(ulElement?.childNodes[4].firstChild).toHaveClass('pagination-btn pagination-btn-default');
    });

    it('should render disabled arrow at start and end', () => {
        // Default message
        const paginationBasicProps: IPaginationProps = {
            currentPage: 1,
            pageSize: 10,
            total: 100
        }
        const wrapper = render(<Pagination {...paginationBasicProps}></Pagination>);
        const ulElement = wrapper.queryByTestId("pagination-element")
        expect(ulElement?.childNodes[1].firstChild).toHaveClass('pagination-btn pagination-btn-default');
        fireEvent.click(
            ulElement?.childNodes[0].firstChild as Element
        );
        expect(ulElement?.childNodes[0].firstChild).toHaveClass('pagination-btn pagination-btn-unselected');
    });

});