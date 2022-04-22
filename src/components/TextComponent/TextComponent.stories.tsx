import React, { useState } from 'react';
import TextComponent from './TextComponent';

export default {
  title: 'TextComponent',
  component: TextComponent,
};

export const TextInput = () => {
  const [thisInput, setthisInput] = useState<string>('');

  const thisInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setthisInput(e.target.value);
  };

  return (
    <>
      <TextComponent inputValue="Input" error={false} />
      <br></br>
      <TextComponent
        inputValue={thisInput}
        placeholderText="Placeholder"
        error={true}
        onChange={thisInputChange}
      />
      {/* This component value is changed in this parent component */}
    </>
  );
};
