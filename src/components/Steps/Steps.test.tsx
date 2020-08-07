import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import MainSteps,{StepStyle} from '../../components/Steps/MainSteps'
// import Button, {PatButtonProps} from './Button';

describe('Steps', () => {
  it('should match snapshot', () => {
    const {asFragment} = render(<MainSteps> Snapshot Button </MainSteps>);
    expect(asFragment()).toMatchSnapshot();
  });


it("renders without crashing", () => {
    render(<MainSteps stepStyle={StepStyle.Horizontal}></MainSteps>);
  });

 });