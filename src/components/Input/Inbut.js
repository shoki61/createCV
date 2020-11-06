import React from 'react';
import { TextInput } from 'react-native';


const input = props => {
    let inputElement  = null
    switch (props.inputType) {
        case 'normal':
            inputElement = <TextInput />;
            break;
        case 'comment':
            inputElement = <TextInput />;
    }

    return (
        {inputElement} 
    )
};

export default input;