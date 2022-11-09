import Dialog from './Dialog';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Simple } from './Dialog.stories';

test('renders the simple dialog correctly', () => {
  render(<Simple />);
  const title = screen.getByText('Set backup account');
  expect(title).toBeInTheDocument();
});
