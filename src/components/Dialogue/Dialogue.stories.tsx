import React from 'react';
import Dialogue from './Dialogue';

export default {
  title: 'Dialogue',
  component: Dialogue,
};

export const SimpleDialogue = () => (
  <div>
    <Dialogue DialogueType="simple"/>
  </div>
);

export const AlertsDialogue = () => (
  <div>
    <Dialogue DialogueType="alerts"/>
  </div>
);

export const FormDialogue = () => (
  <div>
    <Dialogue DialogueType="form"/>
  </div>
);
