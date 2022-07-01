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
            stepperOrientation={"vertical"}
            buttonTitleNext={"NEXT"}
            buttonTitlePrev={"PREV"}
        >
        </Stepper>
    </div>
)