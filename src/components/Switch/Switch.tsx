import React, { FC, InputHTMLAttributes, useState } from 'react';
import { classNames } from '../../utils/classNames';

interface ISwitchProps {
  color?: 'primary' | 'secondary' | 'warning' | 'default';
  size?: 'small';
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  defaultChecked?: boolean;
  required?: boolean;
  iconPosition?: 'left' | 'right';
}

export type PatSwitchProps = ISwitchProps & InputHTMLAttributes<HTMLInputElement>;

const Switch: FC<PatSwitchProps> = ({
  color,
  size,
  label,
  checked: checkedProp,
  onChange,
  disabled,
  defaultChecked,
  required,
  iconPosition,
  ...rest
}) => {
  const [checked, setChecked] = useState(checkedProp || defaultChecked || false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setChecked(newChecked);

    if (onChange) {
      onChange(newChecked);
    }
  };

  const switchStyle = {
    position: 'relative',
    display: 'inline-block',
    width: size === 'small' ? 36 : 48,
    height: size === 'small' ? 14 : 20,
    borderRadius: 16,
    backgroundColor: checked
      ? (color === 'primary' && '#1976d2') ||
        (color === 'secondary' && '#f50057') ||
        (color === 'warning' && '#ff9800') ||
        '#bdbdbd'
      : '#e0e0e0',
    transition: 'background-color 250ms ease',
    '&:hover': {
      backgroundColor: checked
        ? (color === 'primary' && '#0d47a1') ||
          (color === 'secondary' && '#d17777') ||
          (color === 'warning' && '#f57c00') ||
          '#9e9e9e'
        : '#bdbdbd',
    },
  };

  const thumbStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: checked ? (size === 'small' ? 18 : 20) : 0,
    width: size === 'small' ? 18 : 28,
    height: size === 'small' ? 18 : 25,
    borderRadius: '50%',
    backgroundColor: checked
      ? (color === 'primary' && '#1976d2') ||
        (color === 'secondary' && '#d50000') ||
        (color === 'warning' && '#ff5722') ||
        '#616161'
      : '#bdbdbd',
    boxShadow: checked ? '0 0 3px 3px rgba(0, 0, 0, 0.1)' : 'none',
    transition: 'left 250ms ease',
    '&:hover': {
      left: checked ? (size === 'small' ? 14 : 20) : 0,
    },
  };

  const labelStyle = {
    marginLeft: iconPosition === 'left' ? 0 : 8,
    marginRight: iconPosition === 'right' ? 0 : 8,
    display: 'flex',
    alignItems: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    userSelect: 'none',
  };

  const labelCSS = {
    padding: '0 0 0 8px',
  };
  
  return (
    <label style={labelStyle} className="switch-label">
      <input
        type="checkbox"
        style={{ display: 'none' }}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        defaultChecked={defaultChecked}
        required={required}
        className="switch-input"
        {...rest}
      />
      <span style={switchStyle} required className={classNames('switch', { checked })}>
        <span style={thumbStyle} className="thumb"></span>
      </span>
      {label && <span style={labelCSS} className="switch-label-text">{label}</span>}
    </label>
  );
};

export default Switch;