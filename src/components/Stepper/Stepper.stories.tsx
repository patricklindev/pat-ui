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
                 description: ""
                },
                {
                  title: "Define props in component",
                  description: ""
                },
                {
                  title: "Feed an string array",
                description: ""
                },
            ]}
            buttonTitleNext={"NEXT"}
            buttonTitlePrev={"PREV"}
            stepperOrientation={"row"}
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
                 title: "Default array length 3",
                 description: ""
                },
                {
                  title: "Define props in component",
                  description: ""
                },
                {
                  title: "Feed an string array",
                description: ""
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
                    description: "" 
                  },
                  {
                    title:  "Lets start developing",
                    description: ""  
                  },
                  {
                    title:   "Lets begin live deployment",
                    description: ""  
                  },
                  {
                    title:  "Lets market our product",
                    description: ""
                  }
            ]}
            buttonTitleNext={"NEXT"}
            buttonTitlePrev={"PREV"}
            stepperOrientation={"row"}
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