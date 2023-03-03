import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';
import Pagination, { IPaginationProps } from './Pagination';

describe('Pagination', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Pagination></Pagination>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render default pagination', () => {
    const wrapper = render(<Pagination></Pagination>);
    const paginationElement = screen.getByTestId('pagination-element');
    expect(paginationElement).toHaveClass('pagination');

    const list = screen.getByRole('list');
    const { getByText, getAllByRole } = within(list);

    const items = getAllByRole('listitem');
    expect(items.length).toBe(9);

    const itemNames = items.map((item) => item.textContent);
    expect(itemNames).toEqual([
      'previous',
      '1',
      '2',
      '3',
      '4',
      '5',
      '…',
      '10',
      'next',
    ]);

    expect(getByText('previous')).toHaveClass(
      'pagination-item-medium pagination-item-standard'
    );
    expect(getByText('1')).toHaveClass(
      'pagination-item-medium pagination-item-standard-selected'
    );
  });

  it('should render the pagination with different props', () => {
    const props: IPaginationProps = {
      boundaryCount: 2,
      color: 'secondary',
      count: 15,
      defaultPage: 7,
      siblingCount: 1,
      size: 'large',
    };
    const wrapper = render(<Pagination {...props}></Pagination>);

    const list = screen.getByRole('list');
    const { getByText, getAllByRole } = within(list);

    const items = getAllByRole('listitem');
    expect(items.length).toBe(11);

    const itemNames = items.map((item) => item.textContent);
    expect(itemNames).toEqual([
      'previous',
      '1',
      '2',
      '…',
      '6',
      '7',
      '8',
      '…',
      '14',
      '15',
      'next',
    ]);

    expect(getByText('previous')).toHaveClass(
      'pagination-item-large pagination-item-secondary'
    );
  });

  it('should disable previous or next page boutton under certain circumstances', () => {
    const wrapper = render(<Pagination></Pagination>);
    const paginationElement = screen.getByTestId('pagination-element');
    expect(paginationElement).toHaveClass('pagination');

    const list = screen.getByRole('list');
    const { getByText } = within(list);
    expect(getByText('previous')).toHaveAttribute('disabled');
    const itemToBeClicked = getByText('10');
    fireEvent.click(itemToBeClicked);
    expect(getByText('next')).toHaveAttribute('disabled');
  });

  it('should triger onChange event when page number changes', () => {
    const props: IPaginationProps = {
      onChange: jest.fn(),
    };
    const wrapper = render(<Pagination {...props}></Pagination>);

    const list = screen.getByRole('list');
    const { getByText } = within(list);
    expect(props.onChange).toHaveBeenCalledTimes(1);

    const itemToBeClicked = getByText('2');
    fireEvent.click(itemToBeClicked);
    expect(props.onChange).toHaveBeenCalledTimes(2);
  });

  it('should disable both previous and next page buttons when count is zero', () => {
    const props: IPaginationProps = {
      count: 0,
    };
    const wrapper = render(<Pagination {...props}></Pagination>);

    const list = screen.getByRole('list');
    const { getByText, getAllByRole } = within(list);

    const items = getAllByRole('listitem');
    expect(items.length).toBe(2);

    const itemNames = items.map((item) => item.textContent);
    expect(itemNames).toEqual(['previous', 'next']);

    expect(getByText('previous')).toHaveAttribute('disabled');
    expect(getByText('next')).toHaveAttribute('disabled');
  });
});
