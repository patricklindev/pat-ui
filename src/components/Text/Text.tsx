import React from 'react';
import ErrorIcon from "../../asset/icon/ErrorIcon.js";

interface TextProps {
    placeholder?: string;
    value?: string;
    onChange?: any;
    error?: boolean;
 
}

export default function Text({ placeholder, value, onChange, error }:TextProps) {
  return (
    <div className="input-row">
      <input
        className={`text-input ${error ? "text-input-error" : ""}`}
        placeholder={placeholder ? placeholder : ""}
        value={value}
        onChange={onChange}
      
      />
      {error && <ErrorIcon />}
    </div>
  );
}
