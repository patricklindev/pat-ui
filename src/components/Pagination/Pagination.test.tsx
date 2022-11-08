import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Pagination, { IPaginationProps } from './Pagination';
describe('Pagination', () => {
  it('should render', () => {
    const mockProps: IPaginationProps = {
        totalPages: 5,
        pgnType:'filled',
        pgnShape:'basic',
        pgnColor:'primary',
        pgnSize:'lg'
      };
    render(<Pagination {...mockProps}></Pagination>);
    const firstElement = screen.getByText('1')
    const secondElement = screen.getByText('2')
    const thirdElement = screen.getByText('3')
    const fifthElement = screen.getByText('5')
    const elipElement = screen.getByText('. . .')
    const lastElement = screen.getByText('>')
    expect(firstElement).toBeInTheDocument();
    expect(lastElement).toBeInTheDocument();
    expect(elipElement).toBeInTheDocument();
    expect(secondElement).toBeInTheDocument();
    expect(thirdElement).toBeInTheDocument();
    expect(fifthElement).toBeInTheDocument();
  });

  it('if any button > 1 and < totalPages is clicked, display the previous button', () => {
    const mockProps: IPaginationProps = {
        totalPages: 5,
        pgnType:'filled',
        pgnShape:'basic',
        pgnColor:'primary',
        pgnSize:'lg'
      };
    render(<Pagination {...mockProps}></Pagination>);
    const secondElement = screen.getByText('2')
    fireEvent.click(secondElement)
    expect(screen.getByText('<')).toBeInTheDocument();
  });

  it('if lastpage is clicked, remove next button', () => {
    const mockProps: IPaginationProps = {
        totalPages: 5,
        pgnType:'filled',
        pgnShape:'basic',
        pgnColor:'primary',
        pgnSize:'lg'
      };
    const {container} = render(<Pagination {...mockProps}></Pagination>);
    const lastElement = screen.getByText('5')
    fireEvent.click(lastElement)
    expect(container.lastChild?.textContent).toMatch('5');
  });


});
