import React from 'react';
import ErrorIcon from "../../asset/icon/ErrorIcon.js";

interface TextProps {
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
 
}


export default function Text({ placeholder, value, onChange, error, ...rest }:TextProps) {
  return (
    <div className="input-row">
      <input
        className={`text-input ${error ? "text-input-error" : ""}`}
        placeholder={placeholder ? placeholder : ""}
        value={value}
        onChange={onChange}
        type="text"
      
      />
      {error && <ErrorIcon />}
    </div>
  );
}
