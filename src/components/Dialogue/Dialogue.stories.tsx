import React, { useState } from "react";
import Dialogue from "./Dialogue";
import { DialogTitle } from "./Children/DialogTitle";
import { DialogList } from "./Children/DialogList";
import { ListItem } from "./Children/ListItem";
// use pat-ui icons
import Icon from "../Icon";
// use pat-ui buttons
import Button from "../Button";

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
      <Button
        btnType="default"
        disabled={false}
        onClick={toggleModal}
      >
        Simple Dialog
      </Button>
      <Dialogue
        isOpen={modalShown}
        dlgOnClick={toggleModal}
      >
        <DialogTitle>Set backup account</DialogTitle>
        <DialogList>
          {emails.map(email => (
            <ListItem itemOnClick={toggleModal} key={email.id}>
              <Icon
                disabled={false}
                loading={false}
                name='users'
                className="dlg-icon"
              />
              {email.email}
            </ListItem>
          ))}
          <ListItem itemOnClick={toggleModal}>
            <Icon
              disabled={false}
              loading={false}
              name='plus'
              className="dlg-icon dlg-add"
            />
            Add account
          </ListItem>
        </DialogList>
      </Dialogue>
    </div>
  );
};
