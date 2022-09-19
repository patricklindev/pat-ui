import React, { useState } from 'react';
import { Toast, TToastColor } from './Toast';
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
  backgroundColor: '#e7f5ef',
  color: '#20c997',
  margin: '5px',
};
const btnSecondary: React.CSSProperties = {
  width: '125px',
  height: '40px',
  border: 'none',
  borderRadius: '6px',
  backgroundColor: '#f0f0f1',
  color: '#6c757d',
  margin: '5px',
};
const btnSuccess: React.CSSProperties = {
  width: '125px',
  height: '40px',
  border: 'none',
  borderRadius: '6px',
  backgroundColor: '#e8f1e9',
  color: '#52c41a',
  margin: '5px',
};
const btnInfo: React.CSSProperties = {
  width: '125px',
  height: '40px',
  border: 'none',
  borderRadius: '6px',
  backgroundColor: '#dfe9eb',
  color: '#17a2b8',
  margin: '5px',
};
const btnWarning: React.CSSProperties = {
  width: '125px',
  height: '40px',
  border: 'none',
  borderRadius: '6px',
  backgroundColor: '#efede3',
  color: '#ffb533',
  margin: '5px',
};
const btnDanger: React.CSSProperties = {
  width: '125px',
  height: '40px',
  border: 'none',
  borderRadius: '6px',
  backgroundColor: '#f1e6e7',
  color: '#dc3545',
  margin: '5px',
};

const btnTextStyle: React.CSSProperties = {
  margin: 0,
};

const headingStyle: React.CSSProperties = {
  marginTop: '15px',
}

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
  const [openPrimary, setOpenPrimary] = useState(false);
  const [openSecondary, setOpenSecondary] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);
  const [openDanger, setOpenDanger] = useState(false);
  const [openTL, setOpenTL] = useState(false);
  const [openTR, setOpenTR] = useState(false);
  const [openBL, setOpenBL] = useState(false);
  const [openBR, setOpenBR] = useState(false);
  // const [color, setColor] = useState<TToastColor>();
  // const [title, setTitle] = useState('');
  // const [bgColor, setBgColor] = useState('');

  const handleOpenPrimary = () => {
    setOpenPrimary(true);
  };
  const handleOpenSecondary = () => {
    setOpenSecondary(true);
  };
  const handleOpenSuccess = () => {
    setOpenSuccess(true);
  };
  const handleOpenInfo = () => {
    setOpenInfo(true);
  };
  const handleOpenWarning = () => {
    setOpenWarning(true);
  };
  const handleOpenDanger = () => {
    setOpenDanger(true);
  };

  const handleOpenTL = () => {
    setOpenTL(true);
  };
  const handleOpenTR = () => {
    setOpenTR(true);
  };
  const handleOpenBL = () => {
    setOpenBL(true);
  };
  const handleOpenBR = () => {
    setOpenBR(true);
  };

  const handleClosePrimary = () => {
    setOpenPrimary(false);
  };
  const handleCloseSecondary = () => {
    setOpenSecondary(false);
  };
  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };
  const handleCloseInfo = () => {
    setOpenInfo(false);
  };
  const handleCloseWarning = () => {
    setOpenWarning(false);
  };
  const handleCloseDanger = () => {
    setOpenDanger(false);
  };
  const handleCloseTL = () => {
    setOpenTL(false);
  };
  const handleCloseTR = () => {
    setOpenTR(false);
  };
  const handleCloseBL = () => {
    setOpenBL(false);
  };
  const handleCloseBR = () => {
    setOpenBR(false);
  };

  const handleClose = () => {
    setOpenPrimary(false);
    setOpenSecondary(false);
    setOpenSuccess(false);
    setOpenInfo(false);
    setOpenWarning(false);
    setOpenDanger(false);
    setOpenTL(false);
    setOpenTR(false);
    setOpenBL(false);
    setOpenBR(false);
  };

  return (
    <div>
      <Toast
        open={openPrimary}
        color="primary"
        title="Example toast title"
        // onClose={handleClose}
        onClose={handleClosePrimary}
        autoHideDuration={3000}
      />
      <Toast
        open={openSecondary}
        color="secondary"
        title="Example toast title"
        // onClose={handleClose}
        onClose={handleCloseSecondary}
        autoHideDuration={3000}
      />
      <Toast
        open={openSuccess}
        color="success"
        title="Example toast title"
        // onClose={handleClose}
        onClose={handleCloseSuccess}
        autoHideDuration={3000}
      />
      <Toast
        open={openInfo}
        color="info"
        title="Example toast title"
        // onClose={handleClose}
        onClose={handleCloseInfo}
        autoHideDuration={3000}
      />
      <Toast
        open={openWarning}
        color="warning"
        title="Example toast title"
        // onClose={handleClose}
        onClose={handleCloseWarning}
        autoHideDuration={3000}
      />
      <Toast
        open={openDanger}
        color="danger"
        title="Example toast title"
        // onClose={handleClose}
        onClose={handleCloseDanger}
        autoHideDuration={3000}
      />
      <h4 style={headingStyle}>Colors</h4>
      <button style={btnPrimary} onClick={handleOpenPrimary}>
        <h6 style={btnTextStyle}>Primary</h6>
      </button>
      <button style={btnSecondary} onClick={handleOpenSecondary}>
        <h6 style={btnTextStyle}>Secondary</h6>
      </button>
      <button style={btnSuccess} onClick={handleOpenSuccess}>
        <h6 style={btnTextStyle}>Success</h6>
      </button>
      <button style={btnInfo} onClick={handleOpenInfo}>
        <h6 style={btnTextStyle}>Info</h6>
      </button>
      <button style={btnWarning} onClick={handleOpenWarning}>
        <h6 style={btnTextStyle}>Warning</h6>
      </button>
      <button style={btnDanger} onClick={handleOpenDanger}>
        <h6 style={btnTextStyle}>Danger</h6>
      </button>
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

      <Toast
        open={openTL}
        color="primary"
        title="Example toast title"
        position="top-left"
        // onClose={handleClose}
        onClose={handleCloseTL}
        autoHideDuration={3000}
      />
      <Toast
        open={openTR}
        color="secondary"
        title="Example toast title"
        position="top-right"
        // onClose={handleClose}
        onClose={handleCloseTR}
        autoHideDuration={3000}
      />
      <Toast
        open={openBL}
        color="success"
        title="Example toast title"
        position="bottom-left"
        // onClose={handleClose}
        onClose={handleCloseBL}
        autoHideDuration={3000}
      />
      <Toast
        open={openBR}
        color="info"
        title="Example toast title"
        position="bottom-right"
        // onClose={handleClose}
        onClose={handleCloseBR}
        autoHideDuration={3000}
      />
      <h4 style={headingStyle}>Positions</h4>
      <button style={btnPrimary} onClick={handleOpenTL}>
        <h6 style={btnTextStyle}>Top-left</h6>
      </button>
      <button style={btnSecondary} onClick={handleOpenTR}>
        <h6 style={btnTextStyle}>Top-right</h6>
      </button>
      <button style={btnSuccess} onClick={handleOpenBL}>
        <h6 style={btnTextStyle}>Bottom-left</h6>
      </button>
      <button style={btnInfo} onClick={handleOpenBR}>
        <h6 style={btnTextStyle}>Bottom-right</h6>
      </button>
    </div>
  );
};
