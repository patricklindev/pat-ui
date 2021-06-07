import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Popup, { IPopupProps } from './Popup';

describe('Popup', () => {
  it('The default popup render without problem', () => {
    const popupBasicProps: IPopupProps = {
      popupType: 'basic',
      popupSize: 'large',
      popupColor: 'black',
    };
    const msgBasicWrapper = render(<Popup {...popupBasicProps}></Popup>);
    const popupContent = screen.getByTestId('popup-content');
    expect(popupContent).toHaveClass(
      'popup popup-basic popup-large popup-black'
    );
  });
  it('should render message with different props', () => {
    const popupDiffProps: IPopupProps = {
      popupType: 'basic',
      popupSize: 'small',
      popupColor: 'green',
    };
    const popupDiffWrapper = render(<Popup {...popupDiffProps}></Popup>);
    const popupContent = screen.getByTestId('popup-content');
    expect(popupContent).toHaveClass(
      'popup popup-basic popup-small popup-green'
    );
  });
});
