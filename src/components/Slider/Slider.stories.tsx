import React, { ChangeEvent } from 'react';
import Slider from './Slider';

export default {
  title: 'Slider',
  component: Slider,
};

export const DefaultSlider = () => {
  const [value, setValue] = React.useState<number>(50);

  const changeHandler = (event: ChangeEvent, newValue: number | number[]) => {
    setValue(newValue as number);
  }

  return (
    <div>
      <div>Default Slider</div>
      <Slider value={value} onChange={changeHandler} />
      <div>Value: {value}</div>
    </div>
  );
};

export const DiffSizeSlider = () => (
  <div>
    <div>Small Slider</div>
    <Slider sliderSize="sm" />
    <div>Medium Slider</div>
    <Slider sliderSize="md" />
  </div>
);

export const DiffTypeSlider = () => (
  <div>
    <div>Primary Slider</div>
    <Slider sliderType="primary" />
    <div>Secondary Slider</div>
    <Slider sliderType="secondary" />
    <div>Disabled Slider</div>
    <Slider disabled />
  </div>
);

export const SliderWithMarks = () => {
  const [value, setValue] = React.useState<number>(30);
  const handleChange = (event: ChangeEvent, newValue: number | number[]) => {
    setValue(newValue as number);
  };
  const marks = [
    { value: 10 },
    { value: 30 },
    { value: 50 },
    { value: 70 },
    { value: 90 },
  ];

  const marksWithLabels = [
    {
      label: '10',
      value: 10,
    },
    {
      label: '30',
      value: 30,
    },
    {
      label: '50',
      value: 50,
    },
    {
      label: '70',
      value: 70,
    },
    {
      label: '90',
      value: 90,
    },
  ];

  return (
    <div>
      <div>Discrete Slider, current value: {value}</div>
      <Slider marks={true} step={10} value={value} onChange={handleChange} />
      <div>Slider with Custom Marks</div>
      <Slider marks={marks} />
      <div>Slider with Marks and Labels</div>
      <Slider marks={marksWithLabels} step={10} />
    </div>
  );
};

export const RangeSlider = () => {
  const [value1, setValue1] = React.useState<number[]>([20, 37]);
  const handleChange1 = (
    event: ChangeEvent,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([newValue[0], value1[1]]);
    } else {
      setValue1([value1[0], newValue[1]]);
    }
  };

  const [value2, setValue2] = React.useState<number[]>([50, 70]);
  const handleChange2 = (
    event: ChangeEvent,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue2([newValue[0], value2[1]]);
    } else {
      setValue2([value2[0], newValue[1]]);
    }
  };

  return (
    <div>
      <div>
        Range slider, current left value: {value1[0]}, right value: {value1[1]}
      </div>
      <Slider value={value1} onChange={handleChange1} />
      <div>
        Discrete slider, current left value: {value2[0]}, right value:{' '}
        {value2[1]}
      </div>
      <Slider value={value2} onChange={handleChange2} step={10} marks />
    </div>
  );
};

export const VerticalSlider = () => {
  const marksWithLabels = [
    {
      label: '10',
      value: 10,
    },
    {
      label: '30',
      value: 30,
    },
    {
      label: '50',
      value: 50,
    },
    {
      label: '70',
      value: 70,
    },
    {
      label: '90',
      value: 90,
    },
  ];
  return (
    <div style={{ display: 'flex' }}>
      <div>Vertical Slider</div>
      <div style={{ width: '400px' }}>
        <Slider orientation="vertical" />
      </div>
      <div>Slider with Marks and Labels</div>
      <div style={{ width: '400px' }}>
        <Slider marks={marksWithLabels} step={10} orientation="vertical" />
      </div>
    </div>
  );
};
