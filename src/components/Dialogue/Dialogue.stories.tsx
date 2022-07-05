import React, { useState } from "react";
import Dialogue from "./Dialogue";

export default {
  title: 'Dialogue',
  component: Dialogue
}

export const DefaultDialogue = () => {
  const [modalShown, setModalShown] = useState(false);

  const toggleModal = () => setModalShown(!modalShown);

  return (
    <div className="default-dlg">
      <button className="modal-btn" onClick={toggleModal}>
          Click me!
      </button>
      <Dialogue
        className='list-dlg'
        title='Set backup account'
        dlgList={true}
        dlgListContent='janedoe@gmail.com'
        dlgBulletPoint="johndoe@yahoo.com"
        isOpen={modalShown}
        dlgOnClick={toggleModal}
      >
      </Dialogue>
    </div>
  );
};
