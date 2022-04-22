import React, { FC, useState } from 'react';

type TextInputProps = {
  inputValue?: string;
  placeholderText?: string;
  error?: boolean;
  onChange?: Function;
};

const TextComponent: FC<TextInputProps> = ({
  inputValue = '',
  placeholderText = '',
  error = false,
  onChange,
  ...rest
}) => {
  const [input, setInput] = useState<string>(inputValue);

  // ?
  //   // updated input value using useRef
  //   const propInputValue = useRef(propsState.inputValue);
  //   propInputValue.current = propsState.inputValue;

  // REPLACED
  //   const handleInputChange: (e:string) => string = (e) => {
  //     setInput(e.target.value);

  //     // or import input setState change from parent and change parent input state
  //   };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    if (onChange) {
      onChange(e);
    }
  };

  const classList: () => string = () => {
    return error === false ? 'text-input' : 'text-input text-input--error';
  };

  const isTherePlaceholder: () => string = () =>
    !placeholderText ? '' : placeholderText;

  return (
    <div className='text__component'>
      <input
        placeholder={isTherePlaceholder()}
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
