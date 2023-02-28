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
    <Checkbox
      style={checkboxStyle}
      size="sm"
      onChange={action('Small Checkbox clicked')}
    >
      Small Checkbox
    </Checkbox>
    <br />
    <Checkbox
      style={checkboxStyle}
      onChange={action('Default Checkbox clicked')}
    >
      Default(medium) Checkbox
    </Checkbox>
    <br />
    <Checkbox
      style={checkboxStyle}
      size="lg"
      onChange={action('Small Checkbox clicked')}
    >
      Large Checkbox
    </Checkbox>
  </div>
);

export const DiffColorCheckBox = () => (
  <div>
    <Checkbox
      style={checkboxStyle}
      color="primary"
      onChange={action('Primary Checkbox clicked')}
    >
      Primary color Checkbox
    </Checkbox>
    <br />
    <Checkbox
      style={checkboxStyle}
      color="secondary"
      onChange={action('Secondary Checkbox clicked')}
    >
      Secondary color Checkbox
    </Checkbox>
    <br />
    <Checkbox
      style={checkboxStyle}
      color="danger"
      onChange={action('Danger Checkbox clicked')}
    >
      Danger color Checkbox
    </Checkbox>
    <br />
    <Checkbox
      style={checkboxStyle}
      color="info"
      onChange={action('Danger Checkbox clicked')}
    >
      Info color Checkbox
    </Checkbox>
    <br />
    <Checkbox
      style={checkboxStyle}
      color="success"
      onChange={action('Danger Checkbox clicked')}
    >
      Success color Checkbox
    </Checkbox>
    <br />
    <Checkbox
      style={checkboxStyle}
      color="warning"
      onChange={action('Danger Checkbox clicked')}
    >
      Warning color Checkbox
    </Checkbox>
  </div>
);

export const CheckboxWithAndWithoutLabel = () => (
  <div>
    <Checkbox style={checkboxStyle} onChange={action('Checkbox clicked')}>
      Checkbox with label
    </Checkbox>
    <br />
    <Checkbox style={checkboxStyle} onChange={action('Checkbox clicked')} />
  </div>
);

export const CheckedAndUncheckedCheckbox = (): React.ReactNode => {
  const [checked, setChecked] = React.useState(true);
  return (
    <div>
      <Checkbox
        style={checkboxStyle}
        onChange={(event) => {
          setChecked(event.target.checked);
        }}
        checked={checked}
      >
        Checked Checkbox
      </Checkbox>
      <br />
      <Checkbox style={checkboxStyle} onChange={action('Checkbox clicked')}>
        Unchecked Checkbox
      </Checkbox>
    </div>
  );
};
