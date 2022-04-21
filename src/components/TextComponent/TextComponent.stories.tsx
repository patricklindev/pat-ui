import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import TextComponent from './TextComponent';

export default {
  title: 'TextComponent',
  component: TextComponent,
};

export const TextInput = () => {
    const [thisInput, setthisInput] = useState<string>("");

    const thisInputChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setthisInput(e.target.value)
     }

    return(
        <>
            <TextComponent  inputValue='Input' error={false}/>
            <br></br>
            <TextComponent inputValue={thisInput} placeholderText="Placeholder" error={true} onChange={thisInputChange}/>
            {/* This component value is changed in this parent component */}
        </>
        
    )
}
// include onChange later
// export const TextComponent = () => <TextComponent inputValue="" placeholderText="Placeholder" error={false}/>;
// export const ErrorTextComponent = () => <TextComponent inputValue="" error={true}/>;