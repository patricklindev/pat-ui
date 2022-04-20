import React from 'react';
// import './Text.scss';

type TextTypes = { value?: string; placeholder?: string; error?: boolean };

function Text({ value, placeholder, error, ...rest }: TextTypes) {
  //   const { value, placeholder, error, ...rest } = props;
  return (
    <div className={`input-text-plain input-text${error ? '-error' : ''}`}>
      <label>{value ? value + ':' : 'Input:'}</label>
      <input placeholder={placeholder ? placeholder : 'Search'} {...rest} />
    </div>
  );
}

export default Text;
