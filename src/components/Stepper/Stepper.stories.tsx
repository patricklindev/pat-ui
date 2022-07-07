import React from 'react';
import { action } from '@storybook/addon-actions';
import Stepper from './Stepper';

import Card from '../Card/Card'
import Icon from '../Icon/Icon'
import Dropdown from '../Dropdown/Dropdown';
import Button from '../Button/Button';
import { render } from '@testing-library/react';

const buttonStyle: React.CSSProperties = {
  marginRight: '5px',
  marginTop: '5px',
};

export default {
    title: 'Stepper',
    component: Stepper
}


export const DefaultStepper = () => (
    <div>
      <h3>Default Stepper </h3>
        <Stepper
         StepperSize={'sm'}
         StepperOrientation={"row"}
         StepperElements={[
          {
            title: "Card 1",
            description: "",
            label: "We need unique images",
            component: <Button
                         style={buttonStyle}
                         btnType='primary'
                          onClick={action('Primary Button clicked')}
                            >
                          Primary Button
                        </Button>
           },
           {
             title: "Card 2",
             description: "",
             label: 'All images are mock',
             component: <Button
             style={buttonStyle}
             btnType='secondary'
             onClick={action('Primary Button clicked')}
           >
             Primary Button
           </Button>
           },
           {
             title: "Card 3",
           description: "",
           label: "How far can we take usability?",
           component: <Button
           style={buttonStyle}
           btnType='danger'
           onClick={action('Primary Button clicked')}
         >
           Primary Button
         </Button>
           }, 
        ]}
        >
       
        </Stepper>
    </div>
)

export const DefaultSquareStepper = () => (
  <div>
     <h3>Default Square Stepper </h3>
      <Stepper
          StepperType={"square"}
          StepperElements={[
            {
              title: "Card 1",
              description: "",
              label: "We need unique images",
              component: <h1> This is a test </h1>
             },
             {
               title: "Card 2",
               description: "",
               label: 'All images are mock',
               component: <h2> This is a test </h2>
             },
             {
               title: "Card 3",
             description: "",
             label: "How far can we take usability?",
             component: <h3> This is a test </h3>
             }, 
          ]}
          StepperOrientation={"row"}
      >
      </Stepper>
  </div>
)


export const ConfiguringStepperSize = () => (
  <div>
       <h3> Change size sm, md, lg </h3>
        <Stepper
            StepperType={"circle"}
            StepperSize={"sm"}
            StepperElements={[
                {
                 title: "Default array length 3",
                 description: "",
                 label: "Vertical for arrays > 3"
                },
                {
                  title: "Define props in component",
                  description: "",
                  label: 'Mandatory'
                },
                {
                  title: "Feed an string array",
                description: "",
                label: "Keep strings short"
                },
            ]}
            buttonTitleNext={"Next"}
            buttonTitlePrev={"Back"}
            StepperOrientation={"row"}
            allowSkip={false}
        >
        </Stepper>

        <Stepper
            StepperType={"circle"}
            StepperSize={"md"}
            StepperElements={[
                {
                 title: "Default array length is 3",
                 description: "",
                 label: "Vertical for arrays > 3"
                
                },
                {
                  title: "Define props in component",
                  description: "",
                  label: 'Mandatory'
                },
                {
                  title: "Feed an string array",
                description: "",
                label: "Keep strings short"
                },
            ]}
            buttonTitleNext={"Next"}
            buttonTitlePrev={"Back"}
            StepperOrientation={"row"}
            allowSkip={false}
        >
        </Stepper>
        <Stepper
            StepperType={"circle"}
            StepperSize={"lg"}
            StepperElements={[
                {
                 title: "Default array length 3",
                 description: "",
                 label: "Vertical for arrays > 3"
                },
                {
                  title: "Define props in component",
                  description: "",
                  label: 'Mandatory'
                },
                {
                  title: "Feed an string array",
                description: "",
                label: "Keep strings short"
                },
            ]}
            buttonTitleNext={"Next"}
            buttonTitlePrev={"Back"}
            StepperOrientation={"row"}
            allowSkip={false}
        >
        </Stepper>
    </div>
)

export const SkipStep = () => (
    <div>
      <h3> Skip Steps </h3>
        <Stepper
            StepperType={"circle"}
            StepperElements={[
              {
                title: "Skip Stepper Variation",
                description: "",
                label: "Click Skip"
               },
               {
                 title: "Skip this step",
                 description: "",
                 label: 'Skip this step'
               },
               {
                 title: "Also works in higher variations",
               description: "",
               label: "Keep strings short"
               }, 
            ]}
            buttonTitleNext={"Next"}
            buttonTitlePrev={"Back"}
            StepperOrientation={"row"}
            allowSkip={true}
        >
        </Stepper>
    </div>
)

export const ErrorStep = () => (
  <div>
    <h3> Error Steps </h3>
      <Stepper
          StepperType={"circle"}
          StepperElements={[
            {
              title: "Error Stepper Variation",
              description: "",
              label: "type Error into label"
             },
             {
               title: "You can still define title",
               description: "",
               label: 'error'
             },
             {
               title: "props should have label:`error`",
             description: "",
             label: "error"
             }, 
          ]}
          buttonTitleNext={"Continue"}
          buttonTitlePrev={"Previous"}
          StepperOrientation={"row"}
          allowSkip={true}
      >
      </Stepper>
  </div>
)

export const AdditionalStepsStepper = () => (
    <div>
       <h3> Additional Steps </h3>
        <Stepper
            StepperType={"square"}
            StepperElements={[
                  {
                    title:  "The Office - Asian Jim 1",
                    description: "",
                    label: "Scene 1",
                    component: <img className="example" src='https://i.imgur.com/vH7yTh2.jpeg'></img>
                  },
                  {
                    title:   "The Office - Asian Jim 2",
                    description: "",
                    label: "Scene 2",
                    component: <img className="example" src='https://i.imgur.com/KN6aNzr.jpeg'></img> 
                  },
                  {
                    title:   "The Office - Asian Jim 3",
                    description: "",
                    label: "Scene 3",
                    component: <img className="example" src='https://i.imgur.com/sU87w79.jpeg'></img> 
                  },
                   {
                    title:  "The Office - Asian Jim 4",
                    description: "",
                    label: "Scene 4",
                    component: <img className="example" src='https://i.imgur.com/XSqiT6V.jpeg'></img>
                  },
            ]}
            buttonTitleNext={"Next"}
            buttonTitlePrev={"Back"}
            StepperOrientation={"row"}
            StepperLinear={'nonlinear'}
            allowSkip={true}
        >
        </Stepper>
    </div>
)

export const ManualSelect = () => (
  <div>
    <h3> Manual Select </h3>
      <Stepper
          StepperType={"square"}
          StepperElements={[
              {
                  title:  "Manual Select",
                  description: "",
                  label: "Manual Select allows you to bypass Next"
                },
                {
                  title:  "Not Like Skip",
                  description: "",
                  label: "Skip increments, select accepts index value of map"  
                },
                {
                  title:   "Manual Select Differance",
                  description: "",
                  label: "Manual selecting defines useState to index and step of selected icon"   
                },
          ]}
          buttonTitleNext={"Next"}
          buttonTitlePrev={"Back"}
          StepperOrientation={"row"}
          StepperLinear="nonlinear"
          allowSkip={true}
      >
      </Stepper>
  </div>
)

export const DefaultVerticalStepper = () => (
    <div>
      <h3> Default Vertical Stepper </h3>
        <Stepper
            StepperElements={[
                {
                    title:  "Lets begin planning",
                    description: "This is the step where you need to define your application goals,wireframe, and development path"
                  },
                  {
                    title:  "Lets start developing",
                    description: "This is the step where the team begins to parcel out development tasks and begin coding"  
                  },
                  {
                    title:   "Lets begin live deployment",
                    description: "This is the step where you begin to test your product on live servers"  
                  },
                  {
                    title:  "Lets market our product",
                    description: "For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions."
                  }
            ]}
            StepperOrientation={"vertical"}
            buttonTitleNext={"Next"}
            buttonTitlePrev={"Back"}
        >
        </Stepper>
    </div>
)

export const VerticalStepperFancy = () => (
  <div>
    <h3> Vertrical Stepper with Error,Skip </h3>
      <Stepper
                 StepperElements={[
                  {
                    title:  "The Office - Asian Jim 1",
                    description: "",
                    label: "Scene 1",
                    component: <img className="example" src='https://i.imgur.com/vH7yTh2.jpeg'></img>
                  },
                  {
                    title:   "The Office - Asian Jim 2",
                    description: "",
                    label: "Scene 2",
                    component: <img className="example" src='https://i.imgur.com/KN6aNzr.jpeg'></img> 
                  },
                  {
                    title:   "The Office - Asian Jim 3",
                    description: "",
                    label: "Scene 3",
                    component: <img className="example" src='https://i.imgur.com/sU87w79.jpeg'></img> 
                  },
                   {
                    title:  "The Office - Asian Jim 4",
                    description: "",
                    label: "Scene 4",
                    component: <img className="example" src='https://i.imgur.com/XSqiT6V.jpeg'></img>
                  },
            ]}
            buttonTitleNext={"Next"}
            buttonTitlePrev={"Back"}
            StepperOrientation={"vertical"}
            StepperLinear={'nonlinear'}
            allowSkip={true}
        >
      </Stepper>
  </div>
)

