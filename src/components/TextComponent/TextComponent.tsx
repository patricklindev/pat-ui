import React, { useState, useRef } from "react";
// import "./TextInput.css";

type TextInputProps = {
    inputValue:string,
    placeholderText: string,
    error:boolean,
    // onChange:React.ChangeEvent<HTMLInputElement>,
    // All other props (...rest). Is this right???
    [x:string]: any;
}

const TextComponent = ({
    inputValue = "",
    placeholderText = "",
    error = false,
    // onChange,
    ...rest
}: TextInputProps) => {

  const [input, setInput] = useState(inputValue);

        // ERASE?
//   // updated input value using useRef
//   const propInputValue = useRef(propsState.inputValue);
//   propInputValue.current = propsState.inputValue;

        // REPLACED
//   const handleInputChange: (e:string) => string = (e) => {
//     setInput(e.target.value);

//     // or import input setState change from parent and change parent input state
//   };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    setInput(e.target.value)
 }

  const classList: ()=>string = () => {
    return error === false ? "text-input" : "text-input text-input--error";
  };

  const isTherePlaceholder: ()=>string = () => (!placeholderText ? "" : placeholderText);

  return (
    <div className="">
      {/* <h1>Text</h1> */}
      <div className="text-cont">
        <input
          placeholder={isTherePlaceholder()}
          className={classList()}
          type="text"
          value={input}
          onChange={handleInputChange}
          {...rest}
        />
      </div>
    </div>
  );
};

export default TextComponent;
