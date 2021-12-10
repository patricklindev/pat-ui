import React from 'react';
import Progress from './Progress';
import useSimulateProgress from '../../utils/hooks/useSimulateProgress';

export default {
  title: 'Progress',
  component: Progress,
};

export const DefaultProgress = () => {
  const progress = useSimulateProgress();

  return <Progress pgValue={progress} />;
};

export const DiffTypeProgress = () => {
  const progress = useSimulateProgress();

  return (
    <div>
      <h1>Linear</h1>
      <br />
      <Progress pgValue={progress} />
      <br />

      <h1>Circular</h1>
      <br />
      <Progress pgType="circular" pgValue={progress} />
      <br />
    </div>
  );
};

export const DiffSizeProgress = () => {
  const progress = useSimulateProgress();

  return (
    <div>
      <h1>Linear</h1>
      <br />

      <h3>xs</h3>
      <Progress pgSize="xs" pgValue={progress} />
      <br />

      <h3>sm</h3>
      <Progress pgSize="sm" pgValue={progress} />
      <br />

      <h3>default (no need to add props)</h3>
      <Progress pgValue={progress} />
      <br />

      <h3>lg</h3>
      <Progress pgSize="lg" pgValue={progress} />
      <br />

      <h3>xl</h3>
      <Progress pgSize="xl" pgValue={progress} />
      <br />

      <br />

      <h1>Circular</h1>
      <br />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>xs</h3>
          <div style={{ margin: 'auto' }}>
            <Progress pgType="circular" pgSize="xs" pgValue={progress} />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>sm</h3>
          <div style={{ margin: 'auto' }}>
            <Progress pgType="circular" pgSize="sm" pgValue={progress} />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>
            default
            <span style={{ fontSize: '12px' }}> (no need to add props)</span>
          </h3>
          <div style={{ margin: 'auto' }}>
            <Progress pgType="circular" pgValue={progress} />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>lg</h3>
          <div style={{ margin: 'auto' }}>
            <Progress pgType="circular" pgSize="lg" pgValue={progress} />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>xl</h3>
          <div style={{ margin: 'auto' }}>
            <Progress pgType="circular" pgSize="xl" pgValue={progress} />
          </div>
        </div>
      </div>

      <br />
    </div>
  );
};

export const ShowPercentage = () => {
  const progress = useSimulateProgress();

  return (
    <div>
      <h1>Linear</h1>
      <br />

      <h3>xs</h3>
      <Progress showPercentage pgSize="xs" pgValue={progress} />
      <br />

      <h3>sm</h3>
      <Progress showPercentage pgSize="sm" pgValue={progress} />
      <br />

      <h3>default</h3>
      <Progress showPercentage pgValue={progress} />
      <br />

      <h3>lg</h3>
      <Progress showPercentage pgSize="lg" pgValue={progress} />
      <br />

      <h3>xl</h3>
      <Progress showPercentage pgSize="xl" pgValue={progress} />
      <br />

      <br />

      <h1>Circular</h1>
      <br />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>
            xs{' '}
            <span style={{ fontSize: '12px' }}>
              (no percentage shown for xs)
            </span>
          </h3>
          <div style={{ margin: 'auto' }}>
            <Progress
              showPercentage
              pgType="circular"
              pgSize="xs"
              pgValue={progress}
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>sm</h3>
          <div style={{ margin: 'auto' }}>
            <Progress
              showPercentage
              pgType="circular"
              pgSize="sm"
              pgValue={progress}
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>default</h3>
          <div style={{ margin: 'auto' }}>
            <Progress showPercentage pgType="circular" pgValue={progress} />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>lg</h3>
          <div style={{ margin: 'auto' }}>
            <Progress
              showPercentage
              pgType="circular"
              pgSize="lg"
              pgValue={progress}
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>xl</h3>
          <div style={{ margin: 'auto' }}>
            <Progress
              showPercentage
              pgType="circular"
              pgSize="xl"
              pgValue={progress}
            />
          </div>
        </div>
      </div>

      <br />
    </div>
  );
};

export const DiffColorProgress = () => {
  const progress = useSimulateProgress();

  return (
    <div>
      <h1>
        Linear{' '}
        <span style={{ fontSize: '12px' }}>
          (color does not apply to percentage)
        </span>
      </h1>
      <br />

      <h3>primary</h3>
      <Progress showPercentage pgColor="primary" pgValue={progress} />
      <br />

      <h3>secondary</h3>
      <Progress showPercentage pgColor="secondary" pgValue={progress} />
      <br />

      <h3>success</h3>
      <Progress showPercentage pgColor="success" pgValue={progress} />
      <br />

      <h3>info</h3>
      <Progress showPercentage pgColor="info" pgValue={progress} />
      <br />

      <h3>warning</h3>
      <Progress showPercentage pgColor="warning" pgValue={progress} />
      <br />

      <h3>danger</h3>
      <Progress showPercentage pgColor="danger" pgValue={progress} />
      <br />

      <br />

      <h1>Circular</h1>
      <br />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>primary</h3>
          <div style={{ margin: 'auto' }}>
            <Progress
              showPercentage
              pgType="circular"
              pgColor="primary"
              pgValue={progress}
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>secondary</h3>
          <div style={{ margin: 'auto' }}>
            <Progress
              showPercentage
              pgType="circular"
              pgColor="secondary"
              pgValue={progress}
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>success</h3>
          <div style={{ margin: 'auto' }}>
            <Progress
              showPercentage
              pgType="circular"
              pgColor="success"
              pgValue={progress}
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>info</h3>
          <div style={{ margin: 'auto' }}>
            <Progress
              showPercentage
              pgType="circular"
              pgColor="info"
              pgValue={progress}
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>warning</h3>
          <div style={{ margin: 'auto' }}>
            <Progress
              showPercentage
              pgType="circular"
              pgColor="warning"
              pgValue={progress}
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>danger</h3>
          <div style={{ margin: 'auto' }}>
            <Progress
              showPercentage
              pgType="circular"
              pgColor="danger"
              pgValue={progress}
            />
          </div>
        </div>
      </div>

      <br />
    </div>
  );
};
