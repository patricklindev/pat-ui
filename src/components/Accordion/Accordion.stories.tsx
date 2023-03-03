import React from 'react';
import { action } from '@storybook/addon-actions';
import Accordion from './Accordion';
import { Icon } from '../../index';



export default {
  title: 'Accordion',
  component: Accordion,
};

export const DefaultAccordion = () => (
    <div>
        <Accordion expanded header="Panel 1" onChange={action("Default Accordion 1 Clicked")}>
        Consectetur adipiscing elit pellentesque habitant morbi tristique.
        Pulvinar pellentesque habitant morbi tristique. Vel quam elementum
        pulvinar etiam. Pulvinar pellentesque habitant morbi tristique senectus
      </Accordion>
      <Accordion expanded header="Panel 2" onChange={action("Default Accordion 2 Clicked")}>
        Consectetur adipiscing elit pellentesque habitant morbi tristique.
        Pulvinar pellentesque habitant morbi tristique. Vel quam elementum
        pulvinar etiam. Pulvinar pellentesque habitant morbi tristique senectus
      </Accordion>
      <Accordion header="Panel 3" onChange={action("Default Accordion 3 Clicked")}>
        Consectetur adipiscing elit pellentesque habitant morbi tristique.
        Pulvinar pellentesque habitant morbi tristique. Vel quam elementum
        pulvinar etiam. Pulvinar pellentesque habitant morbi tristique senectus
      </Accordion>
    </div>
  );

  
//   export const ControlledAccordion = () => {
//     const [idExpanded, setExpandedID] = React.useState("");

// const data = [
// {
//     id: "panel1",
//     heading: "Panel 1",
//     details: "Nulla facilisi. Phasellus sollicitudin nulla et"
// },
// {
//     id: "panel2",
//     heading: "Panel 2",
//     details: " et et et et et "
// },
// {
//     id: "panel3",
//     heading: "Panel 3",
//     details: " at at at at at at "
// }];
// const handleChange = (panel:any) => (event:any, isExpanded:Boolean) => {
//     // action("Controlled Accordion Clicked");
//     console.log(panel);
//     console.log(isExpanded);
//     setExpandedID(isExpanded ? panel : "");
// };

//     return (
//         <div>
//       {data.map((accordion) => {
//         const { id, heading, details } = accordion;
//         return (
//           <Accordion
//             expanded={idExpanded === id}
//             key={id}
//             onChange={()=> {action("Controlled Accordion Clicked")();handleChange(id);}}
//             header={heading}
//           >
//             {details}
//           </Accordion>
//         );
//       })}
//     </div>
//     )
//   };

  export const DisabledAccordion = () => (
    <div>
        <Accordion expanded header="Panel 1" onChange={action("Accordion 1 Clicked")}>
        Consectetur adipiscing elit pellentesque habitant morbi tristique.
        Pulvinar pellentesque habitant morbi tristique. Vel quam elementum
        pulvinar etiam. Pulvinar pellentesque habitant morbi tristique senectus
      </Accordion>
      <Accordion expanded header="Panel 2" onChange={action("Accordion 2 Clicked")}>
        Consectetur adipiscing elit pellentesque habitant morbi tristique.
        Pulvinar pellentesque habitant morbi tristique. Vel quam elementum
        pulvinar etiam. Pulvinar pellentesque habitant morbi tristique senectus
      </Accordion>
      <Accordion disabled header="Panel 3" onChange={action("Accordion 3 Clicked")}>
        Consectetur adipiscing elit pellentesque habitant morbi tristique.
        Pulvinar pellentesque habitant morbi tristique. Vel quam elementum
        pulvinar etiam. Pulvinar pellentesque habitant morbi tristique senectus
      </Accordion>
    </div>
  );

  export const IconChangedAccordion = () => (
    <div>
        <Accordion expanded header="Panel 1" iconClassName="gg-expand" onChange={action("Accordion 1 Clicked")} >
        Consectetur adipiscing elit pellentesque habitant morbi tristique.
        Pulvinar pellentesque habitant morbi tristique. Vel quam elementum
        pulvinar etiam. Pulvinar pellentesque habitant morbi tristique senectus
      </Accordion>
      <Accordion expanded header="Panel 2" iconClassName="gg-expand" onChange={action("Accordion 2 Clicked")}>
        Consectetur adipiscing elit pellentesque habitant morbi tristique.
        Pulvinar pellentesque habitant morbi tristique. Vel quam elementum
        pulvinar etiam. Pulvinar pellentesque habitant morbi tristique senectus
      </Accordion>
      <Accordion header="Panel 3" iconClassName="gg-expand" onChange={action("Accordion 3 Clicked")}>
        Consectetur adipiscing elit pellentesque habitant morbi tristique.
        Pulvinar pellentesque habitant morbi tristique. Vel quam elementum
        pulvinar etiam. Pulvinar pellentesque habitant morbi tristique senectus
      </Accordion>
    </div>
  );