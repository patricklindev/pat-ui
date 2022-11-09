import { action } from '@storybook/addon-actions';
import React from 'react';
import Pagination from './Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
  argTypes:{onClick: {action:'clicked'}}
};
function generateNewPaginationStory(color:'primary'|'secondary'|'default'):JSX.Element{
  return(<div style={{display:'flex', flexWrap:'wrap', gap:'10px 10px',justifyContent:'space-between'}}> 
  <div>
  <p>Default</p>
  <Pagination count={10} onChanged={action('button clicked')} color={color} variants='default' ></Pagination>
  </div>
  <div>
  <p>Active</p>
  <Pagination count={10} onChanged={action('button clicked')} color={color} variants='active' ></Pagination>
  </div>
  <div>
  <p>Round</p>
  <Pagination count={10} onChanged={action('button clicked')} color={color} round={true} ></Pagination>
  </div>
  <div>
  <p>Outlined</p>
  <Pagination count={10} onChanged={action('button clicked')} color={color} filled={false} ></Pagination>
  </div>
  <div>
  <p>size</p>
  <Pagination count={10} onChanged={action('button clicked')} size='small' color={color} filled={false} ></Pagination>
  <Pagination count={10} onChanged={action('button clicked')} size='medium' color={color} filled={false} ></Pagination>
  <Pagination count={10} onChanged={action('button clicked')} size='large' color={color} filled={false} ></Pagination>
  </div>
  <div>
  <p>Disabled</p>
  <Pagination count={10} color={color} variants='disabled' ></Pagination>
  </div>
</div>)
}

export const Base = () => <div style={{width:'500px'}}><Pagination onChanged={action('button clicked')} count={10} ></Pagination></div>
export const BaseFilledDefault = () => <div style={{width:'500px'}}><Pagination filled={true} variants='default' onChanged={action('button clicked')} count={10} ></Pagination></div>
export const noArrows = () => <div style={{width:'500px'}}><Pagination onChanged={action('button clicked')} count={10} arrows={false} color="primary" ></Pagination></div> 

export const Default = () => generateNewPaginationStory('default');
export const Primary = () => generateNewPaginationStory('primary');
export const Secondary = () => generateNewPaginationStory('secondary');
export const Table = () => 
<div style={{width: '400px'}}>
<p>Table</p>
<Pagination tablePagination={true} tableEndIndexSubscription={action('table End Index Changed')} onChanged={action('Page Changed')} count={100}></Pagination>
</div>