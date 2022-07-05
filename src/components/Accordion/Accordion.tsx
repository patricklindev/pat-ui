import './Accordion.css';
import AccordionChild from './AccordionChild';
import React, { FC } from 'react';
import { accordionItems } from './AccordionItemData';

const Accordion: FC = () => {
  return (
    <div className="container">
      <AccordionChild items={accordionItems} />
    </div>
  );
};
// function App() {
//   const accordionItems = [
//     {
//       title: 'Expansion Panel 1',
//       content: (
//         <div>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </p>
//         </div>
//       ),
//     },
//     {
//       title: 'Expansion Panel 2',
//       content: (
//         <div>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </p>
//         </div>
//       ),
//     },
//     {
//       title: 'Disabled Expansion Panel',
//       content: (
//         <div>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </p>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="container">
//       <h1>Expansion Panel</h1>
//       <Accordion items={accordionItems} />
//     </div>
//   );
// }

export default Accordion;
