import React from "react";
import Dialogue from "./Dialogue";

export default {
  title: 'Dialogue',
  component: Dialogue
}

export const testDialogue = () => (
  <Dialogue
    className='test-dialogue'
    dlgContent='I hope to god this works. I am very excited to get it started now that I know what to do.'
  >
  </Dialogue>
);
