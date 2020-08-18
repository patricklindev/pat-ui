import React from 'react';
import {render} from '@testing-library/react';
import MainSteps,{StepStyle} from '../../components/Steps/MainSteps'

describe('Steps', () => {
  it('should match snapshot', () => {
    const {asFragment} = render(<MainSteps> Snapshot Steps </MainSteps>);
    expect(asFragment()).toMatchSnapshot();
  });

 it("renders without crashing", () => {
    render(<MainSteps stepStyle={StepStyle.Horizontal}></MainSteps>);
  });

  // it('should render correct title', () => {
  //   const cardProps = {
  //     style: 'horizontal',
  //   };
  //   const wrapper = render(<MainSteps stepStyle={StepStyle.Horizontal}></MainSteps>);
  //   const titleElement = wrapper.queryByText('Create your own steps...') as HTMLElement;
  //   expect(titleElement).toBeInTheDocument();
  //   expect(titleElement.tagName).toBe('H5');
   
  // });



 });