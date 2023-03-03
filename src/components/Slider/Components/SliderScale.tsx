import React from 'react';

interface SliderScaleProps {
  trackWidth: number;
  min: number;
  max: number;
  markValues: number[] | boolean;
}

const SliderScale = ({
  trackWidth,
  min,
  max,
  markValues,
}: SliderScaleProps) => {
  const propType = typeof markValues;
  const evenMarkSpacings: number[] = [];
  var markSpacings: (number | undefined)[];

  if (typeof markValues === 'boolean') {
    for (var i = min; i <= max; i += (max - min) / 5) {
      evenMarkSpacings.push(i);
    }
  }
  if (typeof markValues === 'object') {
    markSpacings = markValues
      .map((markValue: number, index: number) => {
        if (index > 0) {
          return markValue - markValues[index - 1];
        } else {
          return;
        }
      })
      .slice(1);
  }

  return (
    <div>
      {typeof markValues === 'boolean' ? (
        <ul
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            width: '100%',
          }}
        >
          {evenMarkSpacings.map((markValue) => {
            return <li>{markValue}</li>;
          })}
        </ul>
      ) : (
        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            width: '100%',
          }}
        >
          {markSpacings.map((markSpacing, index) => {
            return (
              <li style={{ width: `${markSpacing}%` }}>{markValues[index]}</li>
            );
          })}
          <li>{markValues.slice(-1)[0]}</li>
        </ul>
      )}
    </div>
  );
};

export default SliderScale;
