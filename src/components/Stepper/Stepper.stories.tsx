import React from 'react';
import { action } from '@storybook/addon-actions';
import Stepper from './Stepper';


export default {
    title: 'Stepper',
    component: Stepper
}

export const DefaultStepper = () => (
    <div>
      <h3>Default Stepper </h3>
        <Stepper
            buttonTitleNext={"Next"}
            buttonTitlePrev={"Back"}
            stepperOrientation={"row"}
        >
        </Stepper>
    </div>
)

export const DefaultSquareStepper = () => (
  <div>
     <h3>Default Square Stepper </h3>
      <Stepper
          stepperType={"square"}
          stepperSize={"sm"}
          stepperElements={[
            {
              title: "Square Stepper Variation",
              description: "",
              label: "stepperType={`square`}",
             },
             {
               title: "Icon is now square",
               description: "",
               label: 'Square Example',
             },
             {
               title: "Will add more variations",
             description: "",
             label: "Thinking about progress bar",
             }, 
          ]}
          buttonTitleNext={"Next"}
          buttonTitlePrev={"Back"}
          stepperOrientation={"row"}
          allowSkip={false}
      >
      </Stepper>
  </div>
)

export const ConfiguringStepperSize = () => (
  <div>
       <h3> Change size sm, md, lg </h3>
        <Stepper
            stepperType={"circle"}
            stepperSize={"sm"}
            stepperElements={[
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
            stepperOrientation={"row"}
            allowSkip={false}
        >
        </Stepper>

        <Stepper
            stepperType={"circle"}
            stepperSize={"md"}
            stepperElements={[
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
            stepperOrientation={"row"}
            allowSkip={false}
        >
        </Stepper>
        <Stepper
            stepperType={"circle"}
            stepperSize={"lg"}
            stepperElements={[
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
            stepperOrientation={"row"}
            allowSkip={false}
        >
        </Stepper>
    </div>
)

export const SkipStep = () => (
    <div>
      <h3> Skip Steps </h3>
        <Stepper
            stepperType={"circle"}
            stepperElements={[
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
            stepperOrientation={"row"}
            allowSkip={true}
        >
        </Stepper>
    </div>
)

export const ErrorStep = () => (
  <div>
    <h3> Error Steps </h3>
      <Stepper
          stepperType={"circle"}
          stepperElements={[
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
          stepperOrientation={"row"}
          allowSkip={true}
      >
      </Stepper>
  </div>
)

export const AdditionalStepsStepper = () => (
    <div>
       <h3> Additional Steps </h3>
        <Stepper
            stepperType={"square"}
            stepperElements={[
                {
                    title:  "Lets begin planning",
                    description: "",
                    label: ""
                  },
                  {
                    title:  "Lets start developing",
                    description: "",
                    label: ""  
                  },
                  {
                    title:   "Lets begin live deployment",
                    description: "",
                    label: ""   
                  },
                  {
                    title:   "Lets begin public testing",
                    description: "",
                    label: ""    
                  },
                  {
                    title:   "Let market our product",
                    description: "",
                    label: ""    
                  },
            ]}
            buttonTitleNext={"Next"}
            buttonTitlePrev={"Back"}
            stepperOrientation={"row"}
            stepperLinear={'nonlinear'}
            allowSkip={true}
        >
        </Stepper>
    </div>
)

export const ManualSelect = () => (
  <div>
    <h3> Manual Select </h3>
      <Stepper
          stepperType={"square"}
          stepperElements={[
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
          stepperOrientation={"row"}
          stepperLinear="nonlinear"
          allowSkip={true}
      >
      </Stepper>
  </div>
)

export const DefaultVerticalStepper = () => (
    <div>
      <h3> Default Vertical Stepper </h3>
        <Stepper
            stepperElements={[
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
            stepperOrientation={"vertical"}
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
          stepperElements={[
              {
                  title:  "Lets begin planning",
                  description: "This is the step where you need to define your application goals,wireframe, and development path",
                  label: "" 
                },
                {
                  title:  "Lets start developing",
                  description: "This is the step where the team begins to parcel out development tasks and begin coding",
                  label: "" 
                },
                {
                  title:   "Lets begin live deployment",
                  description: "This is the step where you begin to test your product on live servers" ,
                  label: "" 
                },
                {
                  title:   "Vertical Error Example",
                  description: "This is an example of an error",
                  label: "error"
                },
                {
                  title:  "Lets market our product",
                  description: "For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions",
                  label: ""
                }
          ]}
          stepperOrientation={"vertical"}
          buttonTitleNext={"Next"}
          buttonTitlePrev={"Back"}
          allowSkip={true}
      >
      </Stepper>
  </div>
)

