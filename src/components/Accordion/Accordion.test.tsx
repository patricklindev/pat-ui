import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
import Accordion from "./Accordion";

import AccordionHeader from "./AccordionHeader";
import AccordionDetail from "./AccordionDetail";

describe('Accordion', () => {

  it('should match snapshot', () => {
    const { asFragment } = render(
    <Accordion>
    <AccordionHeader >
      <p>hello</p>
    </AccordionHeader>
    <AccordionDetail>
      <p>New Accoirdon detail helloooo</p>
    </AccordionDetail>
  </Accordion>)
  expect(asFragment()).toMatchSnapshot();
  });

  it('should render items', () => {
    const headerSec = 'HelloFromHeader'
    const detailSec = 'HelloFromDetail'
    render(
      <Accordion>
      <AccordionHeader >
        <p>{headerSec}</p>
      </AccordionHeader>
      <AccordionDetail>
        <p>{detailSec}</p>
      </AccordionDetail>
    </Accordion>)
    const headerEl = screen.queryByText(headerSec)
    const detailEl = screen.queryByText(detailSec)
    expect(headerEl).toBeInTheDocument();
    expect(detailEl).toBeInTheDocument();
  });

  it('should open when the expanded props passed', () => {
    const headerSec = 'HelloFromHeader'
    const detailSec = 'HelloFromDetail'
    render(
      <Accordion expanded>
      <AccordionHeader >
        <p>{headerSec}</p>
      </AccordionHeader>
      <AccordionDetail>
        <p>{detailSec}</p>
      </AccordionDetail>
    </Accordion>)
    const activeDiv = document.querySelector('.accordion-container.active')
    expect(activeDiv).toHaveClass('accordion-container active')
  })

  it('should open when the header clicked', () => {
    const headerSec = 'HelloFromHeader'
    const detailSec = 'HelloFromDetail'
    render(
      <Accordion>
      <AccordionHeader >
        <p>{headerSec}</p>
      </AccordionHeader>
      <AccordionDetail>
        <p>{detailSec}</p>
      </AccordionDetail>
    </Accordion>)
    const headerEl = screen.queryByText(headerSec) as HTMLDivElement
    fireEvent.click(headerEl)
    const activeDiv = document.querySelector('.accordion-container.active')
    expect(activeDiv).toHaveClass('accordion-container active')
  })
  it('should close when the accordion already open', () => {
    const headerSec = 'HelloFromHeader'
    const detailSec = 'HelloFromDetail'
    render(
      <Accordion>
      <AccordionHeader >
        <p>{headerSec}</p>
      </AccordionHeader>
      <AccordionDetail>
        <p>{detailSec}</p>
      </AccordionDetail>
    </Accordion>)
    const headerEl = screen.queryByText(headerSec) as HTMLDivElement
    const currentDiv = headerEl.closest('.accordion-container')

    fireEvent.click(headerEl)
    fireEvent.click(headerEl)
    expect(currentDiv).not.toHaveClass('active')
  })
  it('should have a style when props passed', () => {
    const headerSec = 'HelloFromHeader'
    const detailSec = 'HelloFromDetail'
    render(
      <Accordion sx={{backgroundColor : 'red'}}>
      <AccordionHeader >
        <p>{headerSec}</p>
      </AccordionHeader>
      <AccordionDetail>
        <p>{detailSec}</p>
      </AccordionDetail>
    </Accordion>)

    const accordionDiv = document.querySelector('.accordion-container')
    expect(accordionDiv).toHaveStyle('background-color : red;')
  })
  it('should have a render multiple child elements', () => {
    const headerSec = 'HelloFromHeader'
    const headerSec2 = 'HelloFromHeader2'
    const detailSec = 'HelloFromDetail'
    render(
      <Accordion sx={{backgroundColor : 'red'}}>
      <AccordionHeader >
        <p>{headerSec}</p>
        <p>{headerSec2}</p>
        <p>{headerSec2}</p>
        <p>{headerSec2}</p>
      </AccordionHeader>
      <AccordionDetail>
        <p>{detailSec}</p>
      </AccordionDetail>
    </Accordion>)

    const accordionHeaderDiv = document.querySelector('.accordion-header-btn') as HTMLDivElement

    expect(Object.values(accordionHeaderDiv)).toHaveLength(3)
  })
  // it('should open one at a time', () => {
  //   const headerSec = 'HelloFromHeader'
  //   const detailSec = 'HelloFromDetail'
  //   const headerSec2 = 'HelloFromHeader'
  //   const detailSec2 = 'HelloFromDetail'
  //   const [expanded, setExpanded] = React.useState<string | false >(false);

  // const handleChange = (panel : string) => {
  //   return (open?: boolean) => setExpanded(open ? panel : false)
  // }
  //   render(
  //     <>
  //     <Accordion expanded={expanded === 'panel1'} onClick={handleChange('panel1')}>
  //     <AccordionHeader >
  //       <p>{headerSec}</p>
  //     </AccordionHeader>
  //     <AccordionDetail>
  //       <p>{detailSec}</p>
  //     </AccordionDetail>
  //   </Accordion>
  //   <Accordion expanded={expanded === 'panel2'} onClick={handleChange('panel2')}>
  //   <AccordionHeader >
  //     <p>{headerSec2}</p>
  //   </AccordionHeader>
  //   <AccordionDetail>
  //     <p>{detailSec2}</p>
  //   </AccordionDetail>
  // </Accordion>
  // </>)
  //   const headerEl = screen.queryByText(headerSec) as HTMLDivElement
  //   const headerEl2 = screen.queryByText(headerSec2) as HTMLDivElement
  //   fireEvent.click(headerEl)
  //   fireEvent.click(headerEl2)
  //   const activeDiv = document.querySelectorAll('.accordion-container.active')
  //   expect(activeDiv).toHaveClass('accordion-container active')
  // })






})
