import React from "react";
import Text from './Text';

export default {
    title: 'Text',
    component: Text,
};

export const DefaultText = () =>(
    <div className="input-container">
        <h2>Default</h2>
        <Text vaild={true} value={undefined} placeholder={undefined} />
        <Text vaild={true} placeholder="placeholder" value={undefined} />
        <Text vaild={true} value={"input"} placeholder={undefined} />
      </div>
);
export const DefaultDanger = () =>(
    <div className="input-container">
        <h2>With Error</h2>
        <Text vaild={false} value={undefined} placeholder={undefined} />
        <Text vaild={false} placeholder="placeholders" value={undefined} />
        <Text vaild={false} value={"input"} placeholder={undefined} />
      </div>
);