// import "./Text.css";
// import "./_Text.scss";
import errorSvg from '../../asset/icon/error.svg';
import searchSvg from '../../asset/icon/search.svg';
import React, { InputHTMLAttributes, FC } from 'react';
import { classNames } from '../../utils/classNames';


interface ITextProps {
  /** set customized error */
  error?: boolean;
  /** set customized className */
  className?: string;
}



// function Text(props: any) {
const Text: FC<ITextProps> = (props) => {
  const { error, className, ...rest } = props;

  let styleClasses = classNames({
    'inputContainer': !error,
    'inputContainer-error': !!error
  });

  if (className) {
    styleClasses += ' ' + className;
  }

  return (
    <>
      {!error && (
        <div className={styleClasses}>
          <input
            placeholder="Search..."
            className="inputField"
            {...rest}
          ></input>
          <img src={searchSvg} />
        </div>
      )}
      {error && (
        <div className={styleClasses}>
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
