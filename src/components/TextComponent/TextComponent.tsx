import React, { FC, useState } from 'react';

interface ITextInputProps {
  inputValue?: string;
  error?: boolean;
  onChange?: Function;
};

type TextInputProps = ITextInputProps & React.HTMLAttributes<HTMLInputElement>

const TextComponent: FC<TextInputProps> = ({
  inputValue = '',
  error = false,
  onChange,
  ...rest
}) => {
  const [input, setInput] = useState<string>(inputValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    if (onChange) {
      onChange(e);
    }
  };

  const classList: () => string = () => {
    return error === false ? 'text-input' : 'text-input text-input--error';
  };

  return (
    <div className='text__component'>
      <input
        className={classList()}
        type='text'
        value={input}
        onChange={handleInputChange}
        {...rest}
      />
    </div>
  );
};

export default TextComponent;
