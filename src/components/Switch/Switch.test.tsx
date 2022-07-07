import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import Switch from './Switch';


describe('Switch', () => {
    it('should match snapshot', () => {
      const { asFragment } = render(<Switch> Snapshot Button </Switch>);
      expect(asFragment()).toMatchSnapshot();
    });

});