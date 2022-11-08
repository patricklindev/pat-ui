import React from 'react';
import Pagination from './Pagination';



export default {
  title: 'Pagination',
  component: Pagination,
};

export const Filled = () => 
  (
    <div>
      <Pagination
        totalPages={5}
        pgnType={'filled'}
        pgnShape={'basic'}
        pgnColor={'primary'}
        pgnSize={'lg'}
      />
      <br/>
      <Pagination
        totalPages={8}
        pgnType={'filled'}
        pgnShape={'basic'}
        pgnColor={'secondary'}
        pgnSize={'lg'}
      />
      <br/>
      <Pagination
        totalPages={8}
        pgnType={'filled'}
        pgnShape={'rounded'}
        pgnColor={'primary'}
        pgnSize={'lg'}
      />
      <br/>
      <Pagination
        totalPages={8}
        pgnType={'filled'}
        pgnShape={'rounded'}
        pgnColor={'secondary'}
        pgnSize={'lg'}
      />
    </div>
    );

export const Outlined = () => 
  (
    <div>
      <Pagination
        totalPages={8}
        pgnType={'outlined'}
        pgnShape={'basic'}
        pgnColor={'primary'}
        pgnSize={'lg'}
      />
      <br/>
      <Pagination
        totalPages={8}
        pgnType={'outlined'}
        pgnShape={'basic'}
        pgnColor={'secondary'}
        pgnSize={'lg'}
      />
      <br/>
      <Pagination
        totalPages={8}
        pgnType={'outlined'}
        pgnShape={'rounded'}
        pgnColor={'primary'}
        pgnSize={'lg'}
      />
      <br/>
      <Pagination
        totalPages={8}
        pgnType={'outlined'}
        pgnShape={'rounded'}
        pgnColor={'secondary'}
        pgnSize={'lg'}
      />
    </div>
    );

