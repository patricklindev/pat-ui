import React, { useState } from 'react';
import { Toast } from './Toast';
import { colors } from './Icons';

export default {
  title: 'Toast',
  component: Toast,
};

const btnPrimary: React.CSSProperties = {
  width: '125px',
  height: '40px',
  border: 'none',
  borderRadius: '6px',
  backgroundColor: '#e4f8f0',
  color: '#20c997',
  margin: '5px'
};
const btnSecondary: React.CSSProperties = {
  width: '125px',
  height: '40px',
  border: 'none',
  borderRadius: '6px',
  backgroundColor: '#f8f9fa',
  color: '#6c757d',
  margin: '5px'
};
const btnSuccess: React.CSSProperties = {
  width: '125px',
  height: '40px',
  border: 'none',
  borderRadius: '6px',
  backgroundColor: '#d9e9db',
  color: '#52c41a',
  margin: '5px'
};
const btnInfo: React.CSSProperties = {
  width: '125px',
  height: '40px',
  border: 'none',
  borderRadius: '6px',
  backgroundColor: '#cddee2',
  color: '#17a2b8',
  margin: '5px'
};
const btnWarning: React.CSSProperties = {
  width: '125px',
  height: '40px',
  border: 'none',
  borderRadius: '6px',
  backgroundColor: '#f0eddf',
  color: '#ffb533',
  margin: '5px'
};
const btnDanger: React.CSSProperties = {
  width: '125px',
  height: '40px',
  border: 'none',
  borderRadius: '6px',
  backgroundColor: '#ecdedf',
  color: '#dc3545',
  margin: '5px'
};

const btnTextStyle: React.CSSProperties = {
  margin: 0,
};

const btns = [
  {
    text: 'primary',
    color: colors,
  },
  {
    text: 'secondary',
    color: colors,
  },
  {
    text: 'success',
    color: colors,
  },
  {
    text: 'info',
    color: colors,
  },
  {
    text: 'warning',
    color: colors,
  },
  {
    text: 'danger',
    color: colors,
  },
];

export const DiffToast = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState('');
  const [bgColor, setBgColor] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Toast
        open={open}
        title="Toast Success"
        onClose={handleClose}
        autoHideDuration={3000}
      />
      <h3>Colors</h3>
      {/* {btns.map((btn: any) => {
        const btnStyle: React.CSSProperties = {
          width: '125px',
          height: '40px',
          border: 'none',
          borderRadius: '6px',
          backgroundColor: btn.color[btn.text].bg,
          color: btn.color[btn.text].main,
          margin: '5px'
        };
        return (
          <button style={btnStyle} onClick={handleOpen}>
            <h6 style={btnTextStyle}>{btn.text}</h6>
          </button>
        );
      })} */}
      <button style={btnPrimary} onClick={handleOpen}>
        <h6 style={btnTextStyle}>Primary</h6>
      </button>
      <button style={btnSecondary} onClick={handleOpen}>
        <h6 style={btnTextStyle}>Secondary</h6>
      </button>
      <button style={btnSuccess} onClick={handleOpen}>
        <h6 style={btnTextStyle}>Success</h6>
      </button>
      <button style={btnInfo} onClick={handleOpen}>
        <h6 style={btnTextStyle}>Info</h6>
      </button>
      <button style={btnWarning} onClick={handleOpen}>
        <h6 style={btnTextStyle}>Warning</h6>
      </button>
      <button style={btnDanger} onClick={handleOpen}>
        <h6 style={btnTextStyle}>Danger</h6>
      </button>
    </div>
  );
};
