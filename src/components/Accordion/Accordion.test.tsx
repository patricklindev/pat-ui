import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
import Accordion from './index'

describe('Accordion', () => {

  it('should match snapshot', () => {
    const { asFragment } = render(
    <Accordion>
    <Accordion.Header >
      <p>hello</p>
    </Accordion.Header>
    <Accordion.Detail>
      <p>New Accoirdon detail helloooo</p>
    </Accordion.Detail>
  </Accordion>)
  expect(asFragment()).toMatchSnapshot();
  });

  it('should render items', () => {
    const headerText = 'HelloFromHeader'
    const detailText = 'HelloFromDetail'
    render(
      <Accordion>
      <Accordion.Header >
        <p>{headerText}</p>
      </Accordion.Header>
      <Accordion.Detail>
        <p>{detailText}</p>
      </Accordion.Detail>
    </Accordion>)
    const headerEl = screen.queryByText(headerText)
    const detailEl = screen.queryByText(detailText)
    expect(headerEl).toBeInTheDocument();
    expect(detailEl).toBeInTheDocument();
  });

  it('should open when the expanded props passed', () => {
    const headerText = 'HelloFromHeader'
    const detailText = 'HelloFromDetail'
    render(
      <Accordion expanded>
      <Accordion.Header >
        <p>{headerText}</p>
      </Accordion.Header>
      <Accordion.Detail>
        <p>{detailText}</p>
      </Accordion.Detail>
    </Accordion>)
    const activeDiv = document.querySelector('.accordion-container.active')
    expect(activeDiv).toHaveClass('accordion-container active')
  })

  it('should open when the header clicked', () => {
    const headerText = 'HelloFromHeader'
    const detailText = 'HelloFromDetail'
    render(
      <Accordion>
      <Accordion.Header >
        <p>{headerText}</p>
      </Accordion.Header>
      <Accordion.Detail>
        <p>{detailText}</p>
      </Accordion.Detail>
    </Accordion>)
    const headerEl = screen.queryByText(headerText) as HTMLDivElement
    const inActiveDiv = document.querySelector('.accordion-container')
    expect(inActiveDiv).not.toHaveClass('accordion-container active')
    fireEvent.click(headerEl)
    const activeDiv = document.querySelector('.accordion-container.active')
    expect(activeDiv).toHaveClass('accordion-container active')
  })
  it('should close when the accordion already open', () => {
    const headerText = 'HelloFromHeader'
    const detailText = 'HelloFromDetail'
    render(
      <Accordion>
      <Accordion.Header >
        <p>{headerText}</p>
      </Accordion.Header>
      <Accordion.Detail>
        <p>{detailText}</p>
      </Accordion.Detail>
    </Accordion>)
    const headerEl = screen.queryByText(headerText) as HTMLDivElement
    const currentDiv = headerEl.closest('.accordion-container')

    fireEvent.click(headerEl)
    fireEvent.click(headerEl)
    expect(currentDiv).not.toHaveClass('active')
  })
  it('should have a style when props passed', () => {
    const headerText = 'HelloFromHeader'
    const detailText = 'HelloFromDetail'
    render(
      <Accordion sx={{backgroundColor : 'red'}}>
      <Accordion.Header >
        <p>{headerText}</p>
      </Accordion.Header>
      <Accordion.Detail>
        <p>{detailText}</p>
      </Accordion.Detail>
    </Accordion>)

    const accordionDiv = document.querySelector('.accordion-container')
    expect(accordionDiv).toHaveStyle('background-color : red;')
  })
  it('should have a render multiple child elements', () => {
    const headerText = 'HelloFromHeader'
    const headerText2 = 'HelloFromHeader2'
    const detailText = 'HelloFromDetail'
    render(
      <Accordion sx={{backgroundColor : 'red'}}>
      <Accordion.Header >
        <p>{headerText}</p>

      </Accordion.Header>
      <Accordion.Detail>
        <p>{detailText}</p>
        <p>{headerText2}</p>
        <p>{headerText2}</p>
        <p>{headerText2}</p>
      </Accordion.Detail>
    </Accordion>)

    const accordionHeaderDiv = document.querySelector('.accordion-detail-container-content') as HTMLDivElement

    expect(accordionHeaderDiv.children).toHaveLength(4)
  })

})
