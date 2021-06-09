import React from 'react';


import { render, fireEvent } from '@testing-library/react';
import Pagination from './index';

describe('Pagination', () => {

    it('should render default pagination correctly', () => {
        const itemProps = {
            onClick: jest.fn(),
        };
        const wrapper = render(<Pagination data-testid="Pagination">
        <Pagination.Item {...itemProps}>1</Pagination.Item>
        </Pagination>)

        const paginationWrapper = wrapper.getByTestId("Pagination") as HTMLElement;
        expect(paginationWrapper).toBeInTheDocument();
        expect(paginationWrapper.tagName).toBe('DIV');

        const element = wrapper.queryByText('1') as HTMLElement;
        expect(element).toBeInTheDocument();
        expect(element.tagName).toBe('DIV');
        expect(element).toHaveClass('page-item');
        expect(itemProps.onClick).toHaveBeenCalledTimes(0);
        fireEvent.click(element);
        expect(itemProps.onClick).toHaveBeenCalledTimes(1);

    });

    it('should render different styles correctly', () => {
        const styleProps = {
            pageType: 'primary'
        }

        const itemProps = {
            onClick: jest.fn(),
        };

        const wrapper = render(<Pagination {...styleProps} data-testid={"Pagination"}>
            <Pagination.Item {...itemProps}>1</Pagination.Item>
        </Pagination>)

        const paginationPrimary = wrapper.getByTestId("Pagination") as HTMLElement;
        expect(paginationPrimary).toBeInTheDocument();
        expect(paginationPrimary).toHaveClass('page page-primary');
        expect(paginationPrimary.tagName).toBe('DIV');

        const element = wrapper.queryByText('1') as HTMLElement;
        expect(element).toBeInTheDocument();
        expect(element.tagName).toBe('DIV');
        expect(element).toHaveClass('page-item');
        expect(itemProps.onClick).toHaveBeenCalledTimes(0);
        fireEvent.click(element);
        expect(itemProps.onClick).toHaveBeenCalledTimes(1);

    });

    it('should render disabled button and disable onClick correctly', () => {
        const itemProps = {
            onClick: jest.fn(),
            disabled: true,
        }

        const disabledPaginationWrapper = render(<Pagination data-testid="pagination">
            <Pagination.Item {...itemProps}>1</Pagination.Item>
        </Pagination>)

        const paginationWithDisabled = disabledPaginationWrapper.getByTestId("pagination") as HTMLElement;
        expect(paginationWithDisabled).toBeInTheDocument();
        expect(paginationWithDisabled.tagName).toBe('DIV');

        const disabledPageItem = disabledPaginationWrapper.queryByText('1') as HTMLElement;
        expect(disabledPageItem).toBeInTheDocument();
        expect(disabledPageItem.tagName).toBe('DIV');
        expect(disabledPageItem).toHaveClass('page-item disabled');
        expect(itemProps.onClick).toHaveBeenCalledTimes(0);
        fireEvent.click(disabledPageItem);
        expect(itemProps.onClick).toHaveBeenCalledTimes(0);

    })


})

