// import "./Text.css";
// import "./_Text.scss";
import errorSvg from '../../asset/icon/error.svg';
import searchSvg from '../../asset/icon/search.svg';
import React, { InputHTMLAttributes, FC } from 'react';


interface ITextProps {
  /** set customized error */
  error?: boolean;
}

// function Text(props: any) {
const Text: FC<ITextProps> = (props) => {
  const { error, ...rest } = props;
  return (
    <>
      {!error && (
        <div className="inputContainer tableRow">
          <input
            placeholder="Search..."
            className="inputField"
            {...rest}
          ></input>
          <img src={searchSvg} />
        </div>
      )}
      {error && (
        <div className="inputContainer-error tableRow">
          <input
            placeholder="Enter valid term"
            className="inputField-error"
            {...rest}
          ></input>
          <img src={errorSvg} />
        </div>
      )}
    </>
  );

}

export default Text;
