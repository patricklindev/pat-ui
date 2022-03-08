import React, { useState, FC } from 'react';

export type CheckboxColor = 'primary' | 'secondary';
export type CheckboxSize = 'medium' | 'small';

export interface ICheckboxProps {
  checkColor?: CheckboxColor;
  checkSize?: CheckboxSize;
  icon?: any;
  label?: string;
  onChange?: (e?: React.MouseEvent) => void;
  isChecked?: boolean;
}

export const Checkbox: FC<ICheckboxProps> = (props) => {
  const { checkColor, checkSize, icon, label, onChange, isChecked, ...rest } =
    props;
  const [checked, setChecked] = useState(false);

  const handleCheck = (e: any) => {
    setChecked(e.target.checked);
  };

  return (
    <>
      <label className="form-control">
        <span className="checkbox-container">
          <input type="checkbox" onChange={handleCheck} />
          {checked ? (
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="rgba(0, 0, 0, 0.54)"
                d="M7 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm4 10.414-2.707-2.707 1.414-1.414L11 12.586l3.793-3.793 1.414 1.414L11 15.414z"
              />
            </svg>
          ) : (
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="rgba(0, 0, 0, 0.54)"
                d="M7 5c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2H7zm0 12V7h10l.002 10H7z"
              />
            </svg>
          )}
          <span className="ripple-container"></span>
        </span>
        <span>Checkbox</span>
      </label>
    </>
  );
};

export default Checkbox;
