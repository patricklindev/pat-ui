import React, { useState } from 'react';
import { classNames } from '../../utils/classNames';

interface ITextProps  {
	/** display error styling */
	error?: boolean
	/** value set by parent */
	value?: string
}

type TextProps = ITextProps & React.HTMLAttributes<HTMLInputElement>

export default function Text({ className, value = '', onChange, error, ...rest }: TextProps) {
  const [internalValue, setInternalValue] = useState<string>(value);

  let styleClasses = classNames({
    'tx': !error,
    'tx--error': !!error
  });

  if (className) {
    styleClasses += ' ' + className;
  }

  // Ensure internal value is synchronized with the value passed in props.
  if (value !== internalValue) {
    setInternalValue(value);
  }

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.currentTarget.value);

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <input
      className={styleClasses}
      value={internalValue}
      onChange={changeValue}
      {...rest}
      type='text'
    ></input>
  );
}
