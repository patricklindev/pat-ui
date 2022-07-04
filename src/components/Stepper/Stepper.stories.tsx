import React from 'react';
import { action } from '@storybook/addon-actions';
import Stepper from './Stepper';


export default {
    title: 'Stepper',
    component: Stepper
}

export const DefaultStepper = () => (
    <div>
        <Stepper
            stepperType={"circle"}
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
            buttonTitleNext={"NEXT"}
            buttonTitlePrev={"PREV"}
            stepperOrientation={"row"}
            allowSkip={false}
        >
        </Stepper>
    </div>
)

export const SkipStep = () => (
    <div>
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
            buttonTitleNext={"NEXT"}
            buttonTitlePrev={"PREV"}
            stepperOrientation={"row"}
            allowSkip={true}
        >
        </Stepper>
    </div>
)

export const ErrorStep = () => (
  <div>
      <Stepper
          stepperType={"circle"}
          stepperElements={[
            {
              title: "Error Stepper Variation",
              description: "",
              label: "type Error into label"
             },
             {
               title: "This step is now an error",
               description: "",
               label: 'error'
             },
             {
               title: "error variation",
             description: "",
             label: "Keep strings short"
             }, 
          ]}
          buttonTitleNext={"NEXT"}
          buttonTitlePrev={"PREV"}
          stepperOrientation={"row"}
          allowSkip={true}
      >
      </Stepper>
  </div>
)

export const SquareStepper = () => (
    <div>
        <Stepper
            stepperType={"square"}
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
            buttonTitleNext={"NEXT"}
            buttonTitlePrev={"PREV"}
            stepperOrientation={"row"}
        >
        </Stepper>
    </div>
)

export const AdditionalStepsStepper = () => (
    <div>
        <Stepper
            stepperType={"square"}
            stepperElements={[
                {
                    title:  "Lets begin planning",
                    description: "",
                    label: "Container can be fed more strings"
                  },
                  {
                    title:  "Lets start developing",
                    description: "",
                    label: "However not ideal for mobile or small screens"  
                  },
                  {
                    title:   "Lets begin live deployment",
                    description: "",
                    label: "Component will not flex-wrap strings to next line"   
                  },
                  {
                    title:   "Lets begin public testing",
                    description: "",
                    label: "Recommendendation: Less than 4 strings"    
                  },
                  {
                    title:  "Lets market our product",
                    description: "",
                    label: "Or continue to vertical variation"   
                  }
            ]}
            buttonTitleNext={"NEXT"}
            buttonTitlePrev={"PREV"}
            stepperOrientation={"row"}
            allowSkip={true}
        >
        </Stepper>
    </div>
)

export const VerticalStepper = () => (
    <div>
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
                    description: "For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more."
                  }
            ]}
            stepperOrientation={"vertical"}
            buttonTitleNext={"NEXT"}
            buttonTitlePrev={"PREV"}
        >
        </Stepper>
    </div>
)

export const VerticalSquareStepper = () => (
    <div>
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
                    description: "For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more."
                  }
            ]}
            stepperOrientation={"vertical"}
            stepperType={"square"}
            buttonTitleNext={"NEXT"}
            buttonTitlePrev={"PREV"}
        >
        </Stepper>
    </div>
)