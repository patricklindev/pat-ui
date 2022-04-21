import { action } from '@storybook/addon-actions';
import React, {useState} from 'react';
import Text from './Text';

export default {
    title: 'Text',
    component: Text,
}

export const DefaultText = () => {

        const [input, setInput] = useState<string>("");

        function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
            setInput(e.target.value);
        }

    return(
        <div>
        <h1>Text</h1>
        <p>A standard text component</p>
          <Text onChange={handleInputChange}/>
    </div>
    )
    
    }

export const ErrorText = () => (

    <div>
        <h1>Text</h1>
        <p>A text error component</p>
          <Text error={true}/>
    </div>
)
