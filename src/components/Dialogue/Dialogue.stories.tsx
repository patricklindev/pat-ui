import React, { useState } from "react";
import Dialogue from "./Dialogue";

import testIcon from '../../asset/icon/plus-solid.svg';

export default {
  title: 'Dialogue',
  component: Dialogue
}

const emails = [
  {
    id: 1,
    email: 'janedoe@gmail.com'
  },
  {
    id: 2,
    email: 'john_doe@yahoo.com'
  },
];

export const SimpleDialogue = () => {
  const [modalShown, setModalShown] = useState(false);

  const toggleModal = () => setModalShown(!modalShown);

  return (
    <div className="default-dlg">
      <button className="modal-btn" onClick={toggleModal}>
          Click me!
      </button>
      <img src={testIcon} alt='test' />
      {/* you need to pass title, content, and actions via children props */}
      {/* you had the right idea, just have to make some tweaks for it to pass the test! */}
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
