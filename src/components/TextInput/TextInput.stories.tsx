import React from 'react';
import TextInput from './TextInput';
import { action } from '@storybook/addon-actions';

export default {
  title: 'TextInput',
  component: TextInput,
};

const DefaultTextInput = () => {
  return (
    <div>
      <h1>TextInput</h1>
      <p>A standard text input.</p>
      <TextInput
        placeholder="Search..."
        onChange={(e) => action(e.target.value)(e)}
      />
    </div>
  );
};

const ErrTextInput = () => {
  return (
    <div>
      <h1>Error</h1>
      <p>A text input field can shot that the data contains errors.</p>
      <TextInput placeholder="Search..." err />
    </div>
  );
};

export { DefaultTextInput, ErrTextInput };
