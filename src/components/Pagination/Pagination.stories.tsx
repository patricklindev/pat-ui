import React from 'react';
import Pagination from '../Pagination';
// import {action} from '@storybook/addon-actions';

export default {
  title: 'Pagination',
  component: Pagination,
};

export const DefaultPagination = () => (
  <div>
    <h1>Pagination</h1>
    <p>A standard input field.</p>
    <Pagination
      count={20}
      page={10}
      siblingCount={1}
      size={'default'}
      disabled={false}
      color={'secondary'}
      shape={'round'}
    />
  </div>
);

export const ColorPagination = () => (
  <div>
    <h1>Color</h1>
    <p>An pagination can vary in color.</p>
    <Pagination
      count={20}
      page={10}
      siblingCount={1}
      size={'default'}
      color={'primary'}
      shape={'round'}
    />
    <br />
    <br />
    <Pagination
      count={20}
      page={10}
      siblingCount={1}
      size={'default'}
      color={'secondary'}
      shape={'round'}
    />
  </div>
);

export const ShapePagination = () => (
  <div>
    <h1>Shape</h1>
    <p>An pagination can vary in shape.</p>
    <Pagination
      count={20}
      page={10}
      siblingCount={1}
      size={'default'}
      color={'primary'}
      shape={'round'}
    />
    <br />
    <br />
    <Pagination
      count={20}
      page={10}
      siblingCount={1}
      size={'default'}
      color={'primary'}
      shape={'rounded'}
    />
  </div>
);

export const DisabledPagination = () => (
  <div>
    <h1>Disabled</h1>
    <p>An pagination that is disabled.</p>
    <Pagination
      count={20}
      page={10}
      siblingCount={1}
      size={'default'}
      disabled={true}
      color={'secondary'}
      shape={'round'}
    />
    <br />
    <br />
  </div>
);

export const SizePagination = () => (
  <div>
    <h1>Size</h1>
    <p>An pagination can vary in size.</p>
    <Pagination
      count={20}
      page={10}
      siblingCount={1}
      size={'sm'}
      color={'secondary'}
      shape={'round'}
    />
    <br />
    <br />
    <Pagination
      count={20}
      page={10}
      siblingCount={1}
      size={'default'}
      color={'secondary'}
      shape={'round'}
    />
    <br />
    <br />
    <Pagination
      count={20}
      page={10}
      siblingCount={1}
      size={'lg'}
      color={'secondary'}
      shape={'round'}
    />
  </div>
);

export const TablePagination = () => (
  <div>
    <h1>TablePagination</h1>
    <p>TablePagination enable by prop.</p>
    <Pagination count={20} paginationType={'table'} />
  </div>
);
