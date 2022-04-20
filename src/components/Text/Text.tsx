import React from "react";
import ErrorIcon from "../../asset/icon/ErrorIcon";
import { useState } from "react";
// import "./_Text.scss";

function Text(props: any) {
    const {error, value, ...rest} = props;
  let inputClass = "noError";
  if (error) {
    inputClass = "isError";
  }

  const [inputValue, setInputValue] = useState(value);

  return (
    <>
      <div className="textbox-container">
        <p>{props.name}</p>
        <input
          className={"textbox " + inputClass}
          placeholder={props.placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          {...rest}
        />
        {error && <ErrorIcon className="svg-error" />}
      </div>
    </>
  );
}

export default Text;

// import React from 'react'

// const Text = ()=>{
//     return <input/>
// };

// export default Text
