import "./Text.css";
import errorSvg from "./error.svg";
import searchSvg from "./search.svg";
import React, { useState } from "react";

function Text( props: any ) {
    const { error, ...rest } = props;  
  return (
    <>
      {!error && (
        <div className="inputContainer tableRow">
          <input
            placeholder="Search..."
            className="inputField"
            {...rest}></input>
          <img src={searchSvg} />
        </div>
      )}
      {error && (
        <div className="inputContainer-error tableRow">
          <input
            placeholder="Enter valid term"
            className="inputField-error"
            {...rest}></input>
          <img src={errorSvg} />
        </div>
      )}
    </>
  );
}

export default Text;
