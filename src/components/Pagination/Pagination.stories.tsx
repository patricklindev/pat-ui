import React from 'react';
import Pagination from './Pagination';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Pagination',
  component: Pagination,
};

export const DefaultPagination = () => {
  return <Pagination onChange={action('Number of The Page Selected')} />;
};

export const DiffSizePagination = () => {
  return (
    <div>
      <h4>Small</h4>
      <Pagination size="small" />
      <br />

      <h4>Medium</h4>
      <Pagination size="medium" />
      <br />

      <h4>Large</h4>
      <Pagination size="large" />
      <br />
    </div>
  );
};

export const DiffColorPagination = () => {
  return (
    <div>
      <h4>Primary</h4>
      <Pagination color="primary" />
      <br />

      <h4>Secondary</h4>
      <Pagination color="secondary" />
      <br />

      <h4>Standard</h4>
      <Pagination color="standard" />
      <br />
    </div>
  );
};

export const DiffBoundaryCountPagination = () => {
  return (
    <div>
      <h4>Boundary Count = 0</h4>
      <Pagination boundaryCount={0} defaultPage={7} count={15} />
      <br />

      <h4>Boundary Count = 1</h4>
      <Pagination boundaryCount={1} defaultPage={7} count={15} />
      <br />

      <h4>Boundary Count = 2</h4>
      <Pagination boundaryCount={2} defaultPage={7} count={15} />
      <br />

      <h4>Boundary Count = 3</h4>
      <Pagination boundaryCount={3} defaultPage={7} count={15} />
      <br />
    </div>
  );
};

export const DiffSiblingCountPagination = () => {
  return (
    <div>
      <h4>Sibling Count = 0</h4>
      <Pagination siblingCount={0} defaultPage={7} count={15} />
      <br />

      <h4>Sibling Count = 1</h4>
      <Pagination siblingCount={1} defaultPage={7} count={15} />
      <br />

      <h4>Sibling Count = 2</h4>
      <Pagination siblingCount={2} defaultPage={7} count={15} />
      <br />

      <h4>Sibling Count = 3</h4>
      <Pagination siblingCount={3} defaultPage={7} count={15} />
      <br />
    </div>
  );
};

export const DiffDefaultPagePagination = () => {
  return (
    <div>
      <h4>Default Page = 1</h4>
      <Pagination defaultPage={1} count={15} />
      <br />

      <h4>Default Page = 5</h4>
      <Pagination defaultPage={5} count={15} />
      <br />

      <h4>Default Page = 13</h4>
      <Pagination defaultPage={13} count={15} />
      <br />
    </div>
  );
};

export const HidePrevOrNextButtonPagination = () => {
  return (
    <div>
      <h4>Hide Previous Page Buttion</h4>
      <Pagination hidePrevButton />
      <br />

      <h4>Hide Next Page Button</h4>
      <Pagination hideNextButton />
      <br />
    </div>
  );
};
