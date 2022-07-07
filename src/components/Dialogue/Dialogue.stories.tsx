import React, { useState } from "react";
import Dialogue from "./Dialogue";

// use pat-ui icons
import userIcon from '../../../asset/icon/users-solid.svg'
import addIcon from '../../../asset/icon/plus-solid.svg'

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
    <div className="simple-dlg">
      Under construction!!!
    </div>
  );
};
