import React from 'react';
import Accordion from './Accordion';
// import AccordionItem from './AccordionItem';
// import { action } from '@storybook/addon-actions';


export default {
  title: 'Accordion',
  component: Accordion,
};

const accordionItems = [
	{
	  id: 0,
	  title: 'Expansion Panel 1',
	  subTitle: '',
	  png: undefined,
	  content: (
	    <div>
	     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero at similique odit placeat maiores dicta expedita saepe, inventore modi culpa. Illum sit assumenda, voluptate repudiandae consectetur accusantium. Ut, vitae?
	    </div>
	  ),
	},
	{
	  id: 1,
	  title: 'Expansion Panel 2',
	  subTitle: '',
	  png: undefined,
	  content: (
	    <div>
	      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aperiam minus corporis adipisci optio cumque, debitis quos eveniet quas repellat ut asperiores molestiae tempore autem possimus quod impedit quibusdam ratione?
	    </div>
	  ),
	},
	{
	  id: 2,	
	  title: 'Disabled Panel 1',
	  subTitle: '',
	  png: undefined,
	  content: (
	    <div>
	      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptas fugit voluptates blanditiis delectus maiores praesentium, saepe nihil, voluptate corporis vitae. Eos eaque quo placeat, magnam sint id architecto debitis?
	    </div>
	  ),
	},
      ];

const controlledItems = [
	{
	  id: 0,
	  title: 'General Settings',
	  subTitle: 'I am an expansion panel',
	  png: undefined,
	  content: (
	    <div>
	      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ipsa! Asperiores voluptate est nesciunt fugit provident, quasi accusamus delectus et magnam, itaque aliquam nihil. Nulla repellendus ipsa enim dolorum sint.
	    </div>
	  ),
	},
	{
	  id: 1,
	  title: 'Users',
	  subTitle: 'You are currently not an owner',
	  png: undefined,
	  content: (
	    <div>
	      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nostrum alias expedita aliquam saepe facere commodi accusantium est. Perspiciatis ipsa expedita aspernatur laborum omnis molestias ut porro magnam? Consequuntur, facere.
	    </div>
	  ),
	},
	{
	  id: 3,
	  title: 'Advanced Settings',
	  subTitle: 'Filtering has been entirely disabled for whole web server',
	  png: undefined,
	  content: (
	    <div>
	      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quis maiores placeat eveniet a ea ad facilis! Voluptates consequatur nulla vero incidunt laudantium ipsam minus quod libero similique ab. Numquam.
	    </div>
	  ),
	},
	{
	id: 4,
	title: 'Personal Data',
	subTitle: '',
	png: undefined,
	content: (
	 <div>
	    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima aperiam reprehenderit ut iure, quisquam cupiditate a voluptatum eaque deserunt! In asperiores doloribus ea natus modi tempore tenetur velit fugit. Unde.
	  </div>
	  ),
	},
      ];  
      
 const input = () => {
   return <input type="checkbox"/>;
      };

 const additionalItems = [
	{
	  id: 0,
	  title: 'Summary Text',
	  subTitle: '',
	  png: input,
	  content: (
	    <div>
	      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ipsa! Asperiores voluptate est nesciunt fugit provident, quasi accusamus delectus et magnam, itaque aliquam nihil. Nulla repellendus ipsa enim dolorum sint.
	    </div>
	  ),
	},
	{
	  id: 1,
	  title: 'Summary Text',
	  subTitle: '',
	  png: input,
	  content: (
	    <div>
	      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nostrum alias expedita aliquam saepe facere commodi accusantium est. Perspiciatis ipsa expedita aspernatur laborum omnis molestias ut porro magnam? Consequuntur, facere.
	    </div>
	  ),
	},
	{
	  id: 3,
	  title: 'Summary Text ',
	  subTitle: '',
	  png: input,
	  content: (
	    <div>
	      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quis maiores placeat eveniet a ea ad facilis! Voluptates consequatur nulla vero incidunt laudantium ipsam minus quod libero similique ab. Numquam.
	    </div>
	  ),
	},
      ];


export const DefaultAccordion = () => (
  <div> 
    <h1> Simple Expansion Panel </h1>
    <Accordion items={accordionItems}/> 
  </div>
);

export const ControlledAccordion = () => (
  <div> 
    <h1> Controlled Accordion </h1>
    <Accordion items={controlledItems}/> 
  </div>
);

export const AdditionalActions = () => (
  <div> 
    <h1> Additional actions </h1>
    <Accordion items={additionalItems}/> 
  </div>
);
