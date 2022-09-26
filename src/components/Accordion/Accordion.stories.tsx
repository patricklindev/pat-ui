import React from 'react';
import { action } from '@storybook/addon-actions';

import { default as Accordion } from './index';
export default {
  title: 'Accordion',
  component: Accordion,
};

export const DefaultAccordion = () => {
  return (
    <Accordion onClick={action('hello clicked')}>
      <Accordion.Header>
        <p style={{ display: 'inline-block', width: '40%' }}>
          Default Accordion
        </p>
      </Accordion.Header>
      <Accordion.Detail>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </p>
      </Accordion.Detail>
    </Accordion>
  );
};

export const MultipleAccordions = () => {
  return (
    <>
      <Accordion>
        <Accordion.Header>
          <p>Accordion 1</p>
        </Accordion.Header>
        <Accordion.Detail>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </Accordion.Detail>
      </Accordion>
      <Accordion>
        <Accordion.Header>
          <p>Accordion 2</p>
        </Accordion.Header>
        <Accordion.Detail>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </Accordion.Detail>
      </Accordion>
      <Accordion>
        <Accordion.Header>
          <p>Accordion 3</p>
        </Accordion.Header>
        <Accordion.Detail>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </Accordion.Detail>
      </Accordion>
    </>
  );
};

export const DisabledAccordion = () => {
  return (
    <>
      <Accordion>
        <Accordion.Header>
          <p>Accordion 1</p>
        </Accordion.Header>
        <Accordion.Detail>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </Accordion.Detail>
      </Accordion>
      <Accordion>
        <Accordion.Header>
          <p>Accordion 2</p>
        </Accordion.Header>
        <Accordion.Detail>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </Accordion.Detail>
      </Accordion>
      <Accordion disabled>
        <Accordion.Header>
          <p>Accordion 3</p>
        </Accordion.Header>
        <Accordion.Detail>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </Accordion.Detail>
      </Accordion>
    </>
  );
};

export const ControlledAccordion: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string>('');

  const handleChange = (panel: string) => {
    return (open?: boolean) => setExpanded(open ? panel : '');
  };
  return (
    <>
      <Accordion
        expanded={expanded === 'panel1'}
        onClick={handleChange('panel1')}
      >
        <Accordion.Header>
          <p>Accordion 1</p>
        </Accordion.Header>
        <Accordion.Detail>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </Accordion.Detail>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onClick={handleChange('panel2')}
      >
        <Accordion.Header>
          <p>Accordion 2</p>
        </Accordion.Header>
        <Accordion.Detail>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </Accordion.Detail>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onClick={handleChange('panel3')}
      >
        <Accordion.Header>
          <p>Accordion 3</p>
        </Accordion.Header>
        <Accordion.Detail>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </Accordion.Detail>
      </Accordion>
    </>
  );
};

export const StyledAccordion = () => {
  return (
    <>
      <Accordion
        sx={{
          backgroundColor: '#6f42c1',
          borderRadius: '5px',
          maxWidth: '400px',
          color: 'white',
        }}
      >
        <Accordion.Header>
          <p>Styled Accordion</p>
        </Accordion.Header>
        <Accordion.Detail>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
          <Accordion
            onClick={action('hello clicked')}
            sx={{
              backgroundColor: '#6f42c1',
              borderRadius: '5px',
              maxWidth: '400px',
              color: 'white',
            }}
          >
            <Accordion.Header>
              <p>Nested Accordion</p>
            </Accordion.Header>
            <Accordion.Detail>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum dapibus justo erat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Donec ut turpis cursus, tempus ex
                in, dictum ante. Vivamus consequat, justo imperdiet ultricies
                cursus, neque nisl elementum ligula, a pharetra velit nibh vel
                purus. Nam ornare leo non purus fringilla, id lacinia libero
                rhoncus. Cras dolor nulla, porta sed neque nec, auctor dapibus
                ligula. Etiam at interdum neque. Suspendisse imperdiet odio
                nisi, lobortis lacinia turpis porttitor eu. Nam fermentum neque
                nulla, ut dapibus ante dignissim at. Nam sodales, sem sed
                pulvinar scelerisque, arcu orci luctus diam, ut luctus ipsum ex
                eu nunc. Curabitur at purus cursus, fermentum nisi nec, varius
                orci. Quisque in eros dictum, imperdiet sapien eu, vulputate
                sapien.
              </p>
            </Accordion.Detail>
          </Accordion>
        </Accordion.Detail>
      </Accordion>

      <Accordion
        sx={{
          borderRadius: '5px',
          maxWidth: '400px',
          marginTop: '10px',
        }}
      >
        <Accordion.Header>
          <p style={{ display: 'inline-block', width: '50%' }}>
            Styled Accordion
          </p>
          <p
            style={{
              display: 'inline-block',
              width: '40%',
              fontSize: '13px',
              color: 'gray',
            }}
          >
            Secondary Text
          </p>
        </Accordion.Header>
        <Accordion.Detail>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </Accordion.Detail>
      </Accordion>

      <Accordion
        sx={{
          borderRadius: '5px',
          maxWidth: '400px',
          marginTop: '10px',
        }}
      >
        <Accordion.Header
          expandedStyle={{ backgroundColor: 'tomato', color: 'white' }}
        >
          <p style={{ display: 'inline-block', width: '50%' }}>Click Me</p>
        </Accordion.Header>
        <Accordion.Detail>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </Accordion.Detail>
      </Accordion>
    </>
  );
};

export const DiffTypeAccordion = () => {
  return (
    <div>
      <Accordion accordionType="primary">
        <Accordion.Header>
          <p>Primary Accordion</p>
        </Accordion.Header>
        <Accordion.Detail>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </Accordion.Detail>
      </Accordion>

      <Accordion accordionType="secondary">
        <Accordion.Header>
          <p>Secondary Accordion</p>
        </Accordion.Header>
        <Accordion.Detail>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </Accordion.Detail>
      </Accordion>

      <Accordion accordionType="danger">
        <Accordion.Header>
          <p>Danger Accordion</p>
        </Accordion.Header>
        <Accordion.Detail>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </Accordion.Detail>
      </Accordion>
      <Accordion accordionType="info">
        <Accordion.Header>
          <p>Info Accordion</p>
        </Accordion.Header>
        <Accordion.Detail>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </Accordion.Detail>
      </Accordion>
    </div>
  );
};
