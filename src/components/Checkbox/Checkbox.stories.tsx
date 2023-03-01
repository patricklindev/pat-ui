import { action } from '@storybook/addon-actions';
import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

const checkboxStyle: React.CSSProperties = {
  marginRight: '10px',
  marginTop: '10px',
};

export const DefaultCheckbox = () => <Checkbox>Default Checkbox</Checkbox>;

export const DiffSizeCheckBox = () => (
  <div>
    <Checkbox size="sm">Small Checkbox</Checkbox>
    <br />
    <Checkbox>Default(medium) Checkbox</Checkbox>
    <br />
    <Checkbox size="lg">Large Checkbox</Checkbox>
  </div>
);

export const DiffColorCheckBox = () => (
  <div>
    <Checkbox color="primary">Primary color Checkbox</Checkbox>
    <br />
    <Checkbox color="secondary">Secondary color Checkbox</Checkbox>
    <br />
    <Checkbox color="danger">Danger color Checkbox</Checkbox>
    <br />
    <Checkbox color="info">Info color Checkbox</Checkbox>
    <br />
    <Checkbox color="success">Success color Checkbox</Checkbox>
    <br />
    <Checkbox color="warning">Warning color Checkbox</Checkbox>
  </div>
);

export const CustomizedIconCheckbox = () => (
  <div>
    <Checkbox
      icon={<span style={checkboxStyle}>👍</span>}
      checkedIcon={<span style={checkboxStyle}>👎</span>}
    >
      Customized Icon Checkbox
    </Checkbox>
  </div>
);

export const CheckboxWithAndWithoutLabel = () => (
  <div>
    Checkbox with label
    <br />
    <Checkbox>label</Checkbox>
    <br />
    <br />
    Checkbox without label
    <Checkbox />
    <br />
  </div>
);

export const CheckedAndUncheckedCheckbox = (): React.ReactNode => {
  const [checked, setChecked] = React.useState(true);
  return (
    <div>
      <Checkbox
        onChange={(event) => {
          setChecked(event.target.checked);
        }}
        checked={checked}
      >
        Checked Checkbox
      </Checkbox>
      <br />
      <Checkbox>Unchecked Checkbox</Checkbox>
    </div>
  );
};
