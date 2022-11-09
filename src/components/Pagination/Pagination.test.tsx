import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import Pagination, { PaginationProps } from './Pagination';

describe('Pagination', () => {
    it('should match snapshot', () => {
        const { asFragment } = render(<Pagination defaultpage={1} count={10}></Pagination>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should see first page, last page, and two adjacent pages and hide other pages with ellipsis', () => {
        const wrapper = render(<Pagination defaultpage={16} count={30}></Pagination>);
        const adj1 = wrapper.queryByText('15') as HTMLElement;
        const adj2 = wrapper.queryByText('16') as HTMLElement;
        const firstpage = wrapper.queryByText('1') as HTMLElement;
        const lastpage = wrapper.queryByText('30') as HTMLElement;
        const ellipsis = wrapper.queryAllByText('...');
        expect(adj1).toBeInTheDocument();
        expect(adj2).toBeInTheDocument();
        expect(firstpage).toBeInTheDocument();
        expect(lastpage).toBeInTheDocument();
        expect(ellipsis.length).toBe(2);
    })

    it('should use left and right button to switch pages', () => {
        const wrapper = render(<Pagination defaultpage={16} count={30}></Pagination>);
        const left = screen.getByTestId('lt') as HTMLElement;
        const right = screen.getByTestId('gt') as HTMLElement;
        expect(left).toBeInTheDocument();
        expect(right).toBeInTheDocument();
        fireEvent.click(left)
        const prev = wrapper.queryByText('14')
        expect(prev).toBeInTheDocument();
        fireEvent.click(right)
        const post = wrapper.queryByText('17')
        expect(right).toBeInTheDocument();
    })

    it('should be able to pass total pages, current pages, row pages, and table pagination as props', () => {
        const props: PaginationProps = {
            rowsPerPage: 5, defaultpage: 16, count: 30, TablePagination: true
        };
        const wrapper = render(<Pagination {...props}></Pagination>);
        const total = wrapper.queryByText('16-20 of 30')
        const dropdown_bar = wrapper.getByText('5')
        expect(dropdown_bar).toBeInTheDocument();
        expect(dropdown_bar.parentElement?.parentElement?.className).toBe("Dropdown-root tablepagination__dropdown")
        expect(total).toBeInTheDocument();
    })

})