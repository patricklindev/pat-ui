import React from "react";
import { Button, Modal } from "semantic-ui-react";

import RatingExample from "../Rating/RatingExample";

function ModalExample() {
  return (
    <div style={{ marginLeft: 20 }}>
      <Modal
        trigger={<Button>Show Modal</Button>}
        header="For Patrick!"
        content="You are an awesome trainer !!!"
        actions={[{ key: "done", content: "I agree!", positive: true }]}
      />
    </div>
  );
}

export default ModalExample;
