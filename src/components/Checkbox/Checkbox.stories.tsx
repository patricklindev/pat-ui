import React, { useReducer, useState } from 'react';
import { action } from '@storybook/addon-actions';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

// const checkboxStyle: React.CSSProperties = {
//   marginLeft: '15px',
//   marginRight: '5px',
//   marginTop: '5px',
// };

/* Okay */
export const DefaultCheckbox = () => {
  const [unlabeledChecked, setUnlabeledChecked] = useState(false);
  const [labeledChecked, setLabeledChecked] = useState(false);
  return (
    <div>
      <div style={{ display: 'flex', gap: '1.25rem' }}>
        <Checkbox
          checked={unlabeledChecked}
          onChange={() => {
            setUnlabeledChecked(!unlabeledChecked);
          }}
          onClick={action('Default Unlabeled Checkbox Clicked')}
        />
      </div>

      <div style={{ display: 'flex', gap: '1.25rem' }}>
        <Checkbox
          checked={labeledChecked}
          onChange={() => {
            setLabeledChecked(!labeledChecked);
          }}
          onClick={action('Default Labeled Checkbox Clicked')}
          label="With Label"
        />
      </div>
    </div>
  );
};

/* Okay */
export const DiffSizeCheckbox = () => {
  const [uSmall, setUSmall] = useState(false);
  const [uMedium, setUMedium] = useState(false);
  const [lSmall, setLSmall] = useState(false);
  const [lMedium, setLMedium] = useState(false);

  return (
    <div>
      <div
        className="without-label"
        style={{ display: 'flex', gap: '1.25rem' }}
      >
        <Checkbox
          checkboxSize="small"
          checked={uSmall}
          onChange={() => setUSmall(!uSmall)}
          onClick={action('Unlabeled Small Checkbox Clicked')}
        />
        <Checkbox
          checkboxSize="medium"
          checked={uMedium}
          onChange={() => setUMedium(!uMedium)}
          onClick={action('Unlabeled Medium Checkbox Clicked')}
        />
      </div>

      <div className="with-label" style={{ display: 'flex', gap: '1.25rem' }}>
        <Checkbox
          checkboxSize="small"
          label="labeled small"
          checked={lSmall}
          onChange={() => setLSmall(!lSmall)}
          onClick={action('Labeled Small Checkbox Clicked')}
        />
        <Checkbox
          checkboxSize="medium"
          label="labeled medium"
          checked={lMedium}
          onChange={() => setLMedium(!lMedium)}
          onClick={action('Labeled Medium Checkbox Clicked')}
        />
      </div>
    </div>
  );
};

/* Okay */
export const DiffColorCheckbox = () => {
  type ActionType = {
    type:
      | 'toggleUPrimary'
      | 'toggleUSecondary'
      | 'toggleUDefault'
      | 'toggleLPrimary'
      | 'toggleLSecondary'
      | 'toggleLDefault';
    payload?: null;
  };
  type StateType = {
    uPrimary: boolean;
    uSecondary: boolean;
    uDefault: boolean;
    lPrimary: boolean;
    lSecondary: boolean;
    lDefault: boolean;
  };
  const initialState = {
    uPrimary: false,
    uSecondary: false,
    uDefault: false,
    lPrimary: false,
    lSecondary: false,
    lDefault: false,
  };
  const colorReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
      case 'toggleUPrimary':
        return {
          ...state,
          uPrimary: !state.uPrimary,
        };
      case 'toggleUSecondary':
        return {
          ...state,
          uSecondary: !state.uSecondary,
        };
      case 'toggleUDefault':
        return {
          ...state,
          uDefault: !state.uDefault,
        };
      case 'toggleLPrimary':
        return {
          ...state,
          lPrimary: !state.lPrimary,
        };
      case 'toggleLSecondary':
        return {
          ...state,
          lSecondary: !state.lSecondary,
        };
      case 'toggleLDefault':
        return {
          ...state,
          lDefault: !state.lDefault,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(colorReducer, initialState);

  return (
    <div>
      <div
        className="without-label"
        style={{ display: 'flex', gap: '1.25rem' }}
      >
        <Checkbox
          checkboxColor="primary"
          checked={state.uPrimary}
          onChange={() => dispatch({ type: 'toggleUPrimary' })}
          onClick={action('Unlabeled Primary Checkbox Clicked')}
        />
        <Checkbox
          checkboxColor="secondary"
          checked={state.uSecondary}
          onChange={() => dispatch({ type: 'toggleUSecondary' })}
          onClick={action('Unlabeled Secondary Checkbox Clicked')}
        />
        <Checkbox
          checkboxColor="default"
          checked={state.uDefault}
          onChange={() => dispatch({ type: 'toggleUDefault' })}
          onClick={action('Unlabeled Default Checkbox Clicked')}
        />
      </div>

      <div className="with-label" style={{ display: 'flex', gap: '1.25rem' }}>
        <Checkbox
          checkboxColor="primary"
          label="labeled primary"
          checked={state.lPrimary}
          onChange={() => dispatch({ type: 'toggleLPrimary' })}
          onClick={action('Labeled Primary Checkbox Clicked')}
        />
        <Checkbox
          checkboxColor="secondary"
          label="labeled secondary"
          checked={state.lSecondary}
          onChange={() => dispatch({ type: 'toggleLSecondary' })}
          onClick={action('Labeled Secondary Checkbox Clicked')}
        />
        <Checkbox
          checkboxColor="default"
          label="labeled default"
          checked={state.lDefault}
          onChange={() => dispatch({ type: 'toggleLDefault' })}
          onClick={action('Labeled Default Checkbox Clicked')}
        />
      </div>
    </div>
  );
};

export const DiffTypeCheckbox = () => {
  const [defaultChecked, setDefaultChecked] = useState(false);
  const [checkedChecked, setcheckedChecked] = useState(true);
  return (
    <div className="diff-type" style={{ display: 'flex', gap: '1.25rem' }}>
      <Checkbox
        label="Default"
        checked={defaultChecked}
        onChange={() => setDefaultChecked(!defaultChecked)}
        onClick={action('Default Checkbox Clicked!')}
      />
      <Checkbox
        label="Primary Checked"
        checkboxColor="primary"
        checked={checkedChecked}
        onChange={() => setcheckedChecked(!checkedChecked)}
        onClick={action('Initial Checked Checkbox Clicked!')}
      />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Checked Disabled" disabled checked />
      <Checkbox
        label="Secondary Indeterminate"
        indeterminate
        checkboxColor="secondary"
      />
    </div>
  );
};
