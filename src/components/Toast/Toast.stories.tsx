import React, { useState } from 'react';
import Button from '../Button';
import { Toast } from './Toast';

export default {
  title: 'Toast',
  component: Toast,
};

const headingStyle: React.CSSProperties = {
  marginTop: '15px',
};

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
  const [openPropsToast, setOpenPropsToast] = useState(false);

  const handleOpenPrimary = () => setOpenPrimary(true);
  const handleOpenSecondary = () => setOpenSecondary(true);
  const handleOpenSuccess = () => setOpenSuccess(true);
  const handleOpenInfo = () => setOpenInfo(true);
  const handleOpenWarning = () => setOpenWarning(true);
  const handleOpenDanger = () => setOpenDanger(true);
  const handleOpenTL = () => setOpenTL(true);
  const handleOpenTR = () => setOpenTR(true);
  const handleOpenBL = () => setOpenBL(true);
  const handleOpenBR = () => setOpenBR(true);
  const handleOpenPropsToast = () => setOpenPropsToast(true);

  const handleClosePrimary = () => setOpenPrimary(false);
  const handleCloseSecondary = () => setOpenSecondary(false);
  const handleCloseSuccess = () => setOpenSuccess(false);
  const handleCloseInfo = () => setOpenInfo(false);
  const handleCloseWarning = () => setOpenWarning(false);
  const handleCloseDanger = () => setOpenDanger(false);
  const handleCloseTL = () => setOpenTL(false);
  const handleCloseTR = () => setOpenTR(false);
  const handleCloseBL = () => setOpenBL(false);
  const handleCloseBR = () => setOpenBR(false);
  const handleClosePropsToast = () => setOpenPropsToast(false);

  return (
    <div>
      <Toast
        open={openPrimary}
        type="primary"
        title="Example toast title"
        onClose={handleClosePrimary}
        autoHideDuration={3000}
      />
      <Toast
        open={openSecondary}
        type="secondary"
        title="Example toast title"
        onClose={handleCloseSecondary}
        autoHideDuration={3000}
      />
      <Toast
        open={openSuccess}
        type="success"
        title="Example toast title"
        onClose={handleCloseSuccess}
        autoHideDuration={3000}
      />
      <Toast
        open={openInfo}
        type="info"
        title="Example toast title"
        onClose={handleCloseInfo}
        autoHideDuration={3000}
      />
      <Toast
        open={openWarning}
        type="warning"
        title="Example toast title"
        onClose={handleCloseWarning}
        autoHideDuration={3000}
      />
      <Toast
        open={openDanger}
        type="danger"
        title="Example toast title"
        onClose={handleCloseDanger}
        autoHideDuration={3000}
      />
      <Toast
        open={openTL}
        type="primary"
        title="Example toast title"
        position="top-left"
        onClose={handleCloseTL}
        autoHideDuration={3000}
      />
      <Toast
        open={openTR}
        type="secondary"
        title="Example toast title"
        position="top-right"
        onClose={handleCloseTR}
        autoHideDuration={3000}
      />
      <Toast
        open={openBL}
        type="success"
        title="Example toast title"
        position="bottom-left"
        onClose={handleCloseBL}
        autoHideDuration={3000}
      />
      <Toast
        open={openBR}
        type="info"
        title="Example toast title"
        position="bottom-right"
        onClose={handleCloseBR}
        autoHideDuration={3000}
      />
      <Toast
        open={openPropsToast}
        type="secondary"
        title="Done!"
        message="Successfully uploaded file"
        position="top-left"
        iconType="success"
        iconColor="info"
        // iconUri='https://firebasestorage.googleapis.com/v0/b/onebook-client.appspot.com/o/otherImages%2Fservice-entertainment.png?alt=media&token=89099854-42f1-4d00-b411-2d23ee053572'
        onClose={handleClosePropsToast}
        autoHideDuration={3500}
      />

      <h4 style={headingStyle}>Colors</h4>
      <Button
        btnType="default"
        className="toast__btn__primary"
        onClick={handleOpenPrimary}
      >
        Primary
      </Button>
      <Button
        btnType="default"
        className="toast__btn__secondary"
        onClick={handleOpenSecondary}
      >
        Secondary
      </Button>
      <Button
        btnType="default"
        className="toast__btn__success"
        onClick={handleOpenSuccess}
      >
        Success
      </Button>
      <Button
        btnType="default"
        className="toast__btn__info"
        onClick={handleOpenInfo}
      >
        Info
      </Button>
      <Button
        btnType="default"
        className="toast__btn__warning"
        onClick={handleOpenWarning}
      >
        Warning
      </Button>
      <Button
        btnType="default"
        className="toast__btn__danger"
        onClick={handleOpenDanger}
      >
        Danger
      </Button>

      <h4 style={headingStyle}>Positions</h4>
      <Button
        btnType="default"
        className="toast__btn__primary"
        onClick={handleOpenTL}
      >
        Top-left
      </Button>
      <Button
        btnType="default"
        className="toast__btn__secondary"
        onClick={handleOpenTR}
      >
        Top-right
      </Button>
      <Button
        btnType="default"
        className="toast__btn__success"
        onClick={handleOpenBL}
      >
        Bottom-left
      </Button>
      <Button
        btnType="default"
        className="toast__btn__info"
        onClick={handleOpenBR}
      >
        Bottom-right
      </Button>

      <h4 style={headingStyle}>With All Props</h4>
      <Button
        btnType="default"
        className="toast__btn__secondary"
        onClick={handleOpenPropsToast}
      >
        Open Toast
      </Button>

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
    </div>
  );
};
