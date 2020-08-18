import React from 'react';
import {render} from '@testing-library/react';
import MainSteps,{StepStyle} from '../../components/Steps/MainSteps';
import {steps} from '../Steps/stepsData'

 describe('Steps', () => {
  // it('should match snapshot', () => {
  //   const {asFragment} = render(<MainSteps> Snapshot Steps </MainSteps>);
  //   expect(asFragment()).toMatchSnapshot();
  // });

 it('renders without crashing', () => {
    render(<MainSteps stepStyle={StepStyle.Horizontal}  step= { steps }></MainSteps>);
  });

 });