import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react'
import Pagination from './Pagination'; 
const testingElem = (<Pagination count={10} color='primary' variants='active'></Pagination>)
describe('Pagination element', ()=>{

    it('should match snapshot', ()=>{
        const { asFragment } = render(testingElem)
        expect(asFragment()).toMatchSnapshot();
    });

    it('render 8 divs', ()=>{
        const renderedElements = render(testingElem);
        const elements = renderedElements.queryAllByTestId('pageButtons')
        expect(elements).toHaveLength(8)
    })
    it('fires the callback when clicked',()=>{
        const testFire = jest.fn()
        const renderedElement = render(<Pagination count={10} onChanged={testFire}></Pagination>)
        const buttons = renderedElement.queryAllByTestId('pageButtons')
        expect(testFire).toHaveBeenCalledTimes(0)
        fireEvent.click(buttons[1]);
        expect(testFire).toHaveBeenCalledTimes(1)
    })
    it('changes color with props',()=>{
        const renderedElement1 =  render(<Pagination count={10} color='primary' ></Pagination>) 
        const renderedElementItem1 = renderedElement1.queryAllByTestId('pageButtonOuterHolder')
        expect(renderedElementItem1[1]).toHaveClass('primaryColor') 
        cleanup()
        const renderedElement2 =  render(<Pagination count={10} color='secondary' ></Pagination>)
        const renderedElementItem2 = renderedElement2.queryAllByTestId('pageButtonOuterHolder')
        expect(renderedElementItem2[2]).toHaveClass('secondaryColor')
    })
    it('changes size with props',()=>{
        const renderedElement1 =  render(<Pagination count={10} size='small' ></Pagination>) 
        const renderedElementItem1 = renderedElement1.queryAllByTestId('pageButtonOuterHolder')
        expect(renderedElementItem1[1]).toHaveClass('small') 
        cleanup()
        const renderedElement2 =  render(<Pagination count={10} size='large' ></Pagination>)
        const renderedElementItem2 = renderedElement2.queryAllByTestId('pageButtonOuterHolder')
        expect(renderedElementItem2[2]).toHaveClass('large')
    })
    it('changes filled, outline, variants with props',()=>{ 
        const renderedElement1 =  render(<Pagination count={10} size='small' variants='active' color='primary' onChanged={testFire} round={true} filled={true} ></Pagination>) 
        const renderedElementItem1 = renderedElement1.queryAllByTestId('pageButtonOuterHolder') 
        expect(renderedElementItem1[1]).toHaveClass('rounded') 
        expect(renderedElementItem1[1]).toHaveClass('primaryColor') 
        expect(renderedElementItem1[1]).toHaveClass('filled') 
        cleanup()
        const renderedElement2 =  render(<Pagination count={10} size='large' variants='default' round={false} filled={false} ></Pagination>)
        const renderedElementItem2 = renderedElement2.queryAllByTestId('pageButtonOuterHolder')
        expect(renderedElementItem2[2]).toHaveClass('outlineed')
        expect(renderedElementItem2[2]).toHaveClass('defaultColor')
        expect(renderedElementItem2[2]).toHaveClass('squared')
    }) 
    const tabledElement:JSX.Element = <Pagination count={10} tablePagination={true} ></Pagination>
    it('switches to a table format',()=>{
        const renderedElement1 =  render(<Pagination count={10} tablePagination={false} ></Pagination>) 
        const renderedElementItem1 = renderedElement1.queryAllByTestId('pageButtonOuterHolder')
        expect(renderedElementItem1[1]).toBeInTheDocument()
        cleanup()
        const renderedElement2 =  render(tabledElement)
        const renderedElementItem2 = renderedElement2.queryAllByTestId('pageButtonOuterHolder')
        expect(renderedElementItem2[2]).toBeFalsy()
    })
    it('has the table label.',()=>{
        const renderedElement =  render(tabledElement) 
        const elementLabel = renderedElement.queryByLabelText('Rows per page')
        expect(elementLabel).toBeInTheDocument()
        
    })
    it('has left and right navigation buttons.',()=>{
        const element = render(tabledElement)
        const leftArrow = element.getAllByText('<')
        const rightArrow = element.getAllByText('>')
        expect(leftArrow[0]).toBeInTheDocument()
        expect(rightArrow[0]).toBeInTheDocument()
    })
    it('table navigation buttons fire function.',()=>{
        const testFire = jest.fn()
        const element = render(<Pagination count={10} tablePagination={true} onChanged={testFire}></Pagination>)
        const leftArrow = element.getAllByText('<')
        const rightArrow = element.getAllByText('>')
        expect(testFire).toHaveBeenCalledTimes(0)
        fireEvent.click(leftArrow[0])
        fireEvent.click(rightArrow[0])
        expect(testFire).toHaveBeenCalledTimes(2)
    })
})