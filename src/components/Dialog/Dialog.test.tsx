import Dialog from './Dialog';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Simple, Form, Alerts } from './Dialog.stories';

describe('Simple Dialog', () => {
  test('renders the prebuilt simple dialog', () => {
    render(<Simple />);
    const title = screen.getByText('Set backup account');
    expect(title).toBeInTheDocument();
  });
});

describe('Form Dialog', () => {
  test('renders the prebuilt form dialog', () => {
    render(<Form />);

    const title = screen.getByText('Subscribe');
    expect(title).toBeInTheDocument();
  });
});

describe('Alerts Dialog', () => {
  test('renders the prebuilt alerts dialog', () => {
    render(<Alerts />);
    const title = screen.getByText("Use Google's location service?");
    expect(title).toBeInTheDocument();
  });
});
