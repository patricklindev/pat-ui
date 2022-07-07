import React from 'react';
import { render,fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';
import { icon } from '@fortawesome/fontawesome-svg-core';


describe('<Checkbox />',()=>{

  it('should able to change the check/uncheck state by default',()=>{
    const {getByTestId}  = render(<Checkbox />)

    const checkBoxInput = getByTestId('inputCheckBox')
    const iconSVG = getByTestId('iconSVG')

    expect(checkBoxInput).toBeInTheDocument()
    expect(iconSVG).toBeInTheDocument()
    expect(iconSVG.firstChild).not.toHaveClass('bg-iChecked-path-default')

    fireEvent.click(checkBoxInput)
    expect(iconSVG.firstChild).toHaveClass('bg-iChecked-path-default')
  })

  it('should be able to choose the size of the component with some predefined size from props',()=>{
    const {getByTestId}  = render(<Checkbox checkSize='large'/>)
    const targetElement = getByTestId('iconSpan')
    expect(targetElement).toBeInTheDocument()
    expect(targetElement).toHaveClass('checkbox-large')
  })

  test('when user wont defined any checkSize value, checkSize value should be normal',()=>{
    const {getByTestId}  = render(<Checkbox />)
    const targetElement = getByTestId('iconSpan')
    expect(targetElement).toBeInTheDocument()
    expect(targetElement).toHaveClass('checkbox-normal')
  })

  it('should be able to choose the color of the component with some predefine color from props when uncheck',()=>{
    const {getByTestId}  = render(<Checkbox checkBgTheme='secondary'/>)
    const targetElement = getByTestId('iconSpan')
    expect(targetElement).toBeInTheDocument()
    expect(targetElement).toHaveClass('bg-iCheck-secondary')
  })


  test('svg fill value will be the checkBgTheme theme provide from props when uncheck',()=>{
    const {getByTestId}  = render(<Checkbox checkBgTheme='secondary'/>)

    const iconSVG = getByTestId('iconSVG')
    expect(iconSVG.firstChild).toHaveClass('bg-iCheck-path-secondary')
  })

  test('svg fill value will be the checkBgTheme theme provide from props when check',()=>{
    const {getByTestId}  = render(<Checkbox checkBgTheme='secondary'/>)

    const checkBoxInput = getByTestId('inputCheckBox')
    const iconSVG = getByTestId('iconSVG')
    expect(iconSVG.firstChild).not.toHaveClass('bg-iChecked-path-secondary')

    fireEvent.click(checkBoxInput)
    expect(iconSVG.firstChild).toHaveClass('bg-iChecked-path-secondary')
  })

  it('should be the default checkBgTheme when user don\'t provide checkBgTheme props',()=>{
    const {getByTestId}  = render(<Checkbox />)

    const targetElement = getByTestId('iconSpan')
    expect(targetElement).toHaveClass('bg-iCheck-default')
  })

  it('should be the default svg fill value when user don\'t provide checkBgTheme props when uncheck',()=>{
    const {getByTestId}  = render(<Checkbox />)

    const iconSVG = getByTestId('iconSVG')
    expect(iconSVG.firstChild).toHaveClass('bg-iCheck-path-default')
  })

  it('should be the default svg fill value when user don\'t provide checkBgTheme props when check',()=>{
    const {getByTestId}  = render(<Checkbox />)

    const checkBoxInput = getByTestId('inputCheckBox')
    const iconSVG = getByTestId('iconSVG')
    expect(iconSVG.firstChild).not.toHaveClass('bg-iChecked-path-default')
    fireEvent.click(checkBoxInput)
    expect(iconSVG.firstChild).toHaveClass('bg-iChecked-path-default')
  })

  it('should be able to choose the color of component with some predefine color from props when check',()=>{
    const {getByTestId} = render(<Checkbox checkedBgTheme='secondary'/>)

    const checkBoxInput = getByTestId('inputCheckBox')
    const targetElement = getByTestId('iconSpan')
    const iconSVG = getByTestId('iconSVG')

    expect(targetElement).not.toHaveClass('bg-iCheck-secondary')
    expect(iconSVG.firstChild).not.toHaveClass('bg-iChecked-path-secondary')

    fireEvent.click(checkBoxInput)

    expect(targetElement).toHaveClass('bg-iCheck-secondary')
    expect(iconSVG.firstChild).toHaveClass('bg-iChecked-path-secondary')
  })

  it.todo('should be able to decide the icons to represent check/unchecked state from props')

  it.todo('should be able to define the label from the props')

  it.todo('can control the check/uncheck state from the props')

  it.todo('can listen to the change of check/uncheck state from outside of the component by passing the onChange callback from props')
})
