import React from "react";
import Icon from "./error.svg";

interface Props {
    value?: any,
    error?: boolean,
    placeholder?: any,
    className?: string
}

export default function Text(props:Props) {
    const [value,setValue] = React.useState(props.value);

    function handleChange(e:any) {
        setValue({ value: e.target.value });
    }

  
    return (
      <div className="text-container">
        <input
          className={props.error ? `${props.className} error` : `${props.className}`}
          value={value}
          onChange={handleChange}
          placeholder={props.placeholder}
        />
        {props.error && (
          <div className="icon-container">
            <img src={Icon} alt="error" />
          </div>
        )}
      </div>
    );
}
