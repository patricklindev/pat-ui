import React, { useState } from 'react';
import ErrorIcon from './errorIcon';

const Text = ({ isValid = true, value = '', ...rest }) => {
  const [input, setInput] = useState(value);

  let classNames = ['text'];

  if (isValid) {
    classNames = classNames.filter((name) => name !== 'text__error');
  } else {
    classNames.push('text__error');
  }

  const error = isValid ? null : <ErrorIcon />;

  const udpateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className='text__group'>
      <input
        className={classNames.join(' ')}
        type="text"
        value={input}
        onChange={udpateInput}
        {...rest}
      />
      {error}
    </div>
  );
};

export default Text;
