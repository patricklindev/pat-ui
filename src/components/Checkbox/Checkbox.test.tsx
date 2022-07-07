import React from 'react';
import { render,fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';
import { IconPath } from './Icons';
import {ICheckboxProps} from './Checkbox';

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

  it('should be able to decide the icons to represent check/unchecked state from props',()=>{
    const {getByTestId} = render(<Checkbox icon='home'/>)

    const iconSVG = getByTestId('iconSVG')
    const iconSVGPath = getByTestId('iconSVGPath')

    expect(iconSVG.getAttribute('viewBox')).toBe(IconPath['home'].viewBox)
    expect(iconSVGPath.getAttribute('d')).toBe(IconPath['home'].path)
  })

  test('when user define icon props, not define iconTheme props, svg path fill value will be default when uncheck',()=>{
    const {getByTestId} = render(<Checkbox icon='home'/>)

    const iconSVG = getByTestId('iconSVG')
    expect(iconSVG.firstChild).toHaveClass('bg-iOther-path-default')
  })

  test('when user define icon props, not define iconTheme props, svg path fill value will be default when check',()=>{
    const {getByTestId} = render(<Checkbox icon='home'/>)

    const iconSVG = getByTestId('iconSVG')
    const checkBoxInput = getByTestId('inputCheckBox')

    expect(iconSVG.firstChild).not.toHaveClass('bg-iOther-check-path-default')

    fireEvent.click(checkBoxInput)

    expect(iconSVG.firstChild).toHaveClass('bg-iOther-check-path-default')
  })

  test('when user define iconTheme and icon props,svg path fill value should be iconTheme value when check',()=>{
    const {getByTestId} = render(<Checkbox iconTheme = 'primary' icon='home'/>)

    const checkBoxInput = getByTestId('inputCheckBox')
    const iconSVG = getByTestId('iconSVG')

    expect(iconSVG.firstChild).not.toHaveClass('bg-iOther-check-path-primary')
    fireEvent.click(checkBoxInput)
    expect(iconSVG.firstChild).toHaveClass('bg-iOther-check-path-primary')
  })

  test('when user define icon props, svg wrapper will remove border',()=>{
    const {getByTestId} = render(<Checkbox icon='home'/>)

    const targetElement = getByTestId('iconSpan')
    expect(targetElement).toHaveClass('bg-iOther-default')
  })

  it('should be able to define the label from the props',()=>{
    const {getByText} = render(<Checkbox label='hello,world'/>)

    expect(getByText('hello,world')).toBeInTheDocument()
  })

  it('can control the check/uncheck state from the props',()=>{
    const {getByTestId} = render(<Checkbox checked/>)
    const checkBoxInput = getByTestId('inputCheckBox')

    expect(checkBoxInput).toBeChecked()
  })

  it('can listen to the change of check/uncheck state from outside of the component by passing the onChange callback from props',()=>{

    const btnLinkProps: ICheckboxProps = {
      onChange: jest.fn(),
    };

    const {getByTestId} = render(<Checkbox {...btnLinkProps}/>)

    const checkBoxInput = getByTestId('inputCheckBox')

    fireEvent.change(checkBoxInput, {target: {checked: false}});
    expect(checkBoxInput).not.toBeChecked()

    fireEvent.change(checkBoxInput, {target: {checked: true}});
    expect(checkBoxInput).toBeChecked()
  })
})
