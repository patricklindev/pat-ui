// @ts-nocheck
import React, { ChangeEvent, useState } from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const DefaultCheckbox = () => <Checkbox/>;

export const DifferentSizeCheckbox = () => <div style={{display: 'flex'}}>
  <Checkbox checkboxSize='small'/>
  <Checkbox checkboxSize='medium'/>
  <Checkbox checkboxSize='large'/>
</div>;

export const DifferentColorCheckbox = () => <div style={{display: 'flex'}}>
  <Checkbox color='default'/>
  <Checkbox color='primary'/>
  <Checkbox color='secondary'/>
  <Checkbox color='green'/>
  <Checkbox color='purple'/>
</div>;

export const DifferentLabelPositionCheckbox = () => <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
  <Checkbox labelPosition='top' label='top'/>
  <Checkbox labelPosition='right' label='right'/>
  <Checkbox labelPosition='bottom' label='bottom'/>
  <Checkbox labelPosition='left' label='left'/>
</div>;

export const InactiveCheckbox = () => {
const [activeOne, setActiveOne] = useState(false);
const [activeTwo, setActiveTwo] = useState(true);
  return <div style={{display: 'flex'}}>
    <Checkbox checked={activeOne} disabled={false} onChange={() => setActiveOne(prev => !prev)} color='secondary'/>
    <Checkbox checked={false} disabled={true} color='secondary'/>
    <Checkbox checked={activeTwo} disabled={false} onChange={() => setActiveTwo(prev => !prev)} color='secondary'/>
    <Checkbox checked={true} disabled={true} color='secondary'/>
  </div>;
}

export const IndeterminateCheckbox = () => {
  const [parent, setParent] = useState(false);
  const [childOne, setChildOne] = useState(false);
  const [childTwo, setChildTwo] = useState(false);

  const handleChange = (e: ChangeEvent<Element>) => {
    const id = e.target.id;
    if (id === 'parent') {
      if (!parent) {
        setChildOne(true);
        setChildTwo(true);
      }
      else {
        setChildOne(false);
        setChildTwo(false);
      }
      setParent(prev => !prev);
    }
    else if (id === 'childOne') {
      if (childOne && parent) setParent(false);
      else if (!childOne && childTwo && !parent) setParent(true);
      setChildOne(prev => !prev);
    }
    else if (id === 'childTwo') {
      if (childTwo && parent) setParent(false);
      else if (!childTwo && childOne && !parent) setParent(true);
      setChildTwo(prev => !prev);
    }
  };

  return (
    <div>
      <Checkbox id='parent' checked={parent} onChange={handleChange} indeterminate={childOne !== childTwo} label='parent' />
      <Checkbox id='childOne' checked={childOne} onChange={handleChange} label='child one' style={{marginLeft: '10px'}} />
      <Checkbox id='childTwo' checked={childTwo} onChange={handleChange} label='child two' style={{marginLeft: '10px'}} />
    </div>
  );
};

