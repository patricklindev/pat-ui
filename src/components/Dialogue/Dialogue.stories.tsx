import React, { useState } from "react";
import Dialogue from "./Dialogue";

export default {
  title: 'Dialogue',
  component: Dialogue
}

export const TestDialogue = () => {
  const [modalShown, setModalShown] = useState(false);

  const toggleModal = () => setModalShown(!modalShown);

  return (
  <Dialogue
    className='list-dlg'
    title='List Title'
    dlgList={true}
    dlgListContent='Hello'
    dlgBulletPoint="World"
    isOpen={modalShown}
    dlgOnClick={toggleModal}
  >
    <button className="modal-btn" onClick={toggleModal}>
      Click me!
    </button>
  </Dialogue>
  );
};
