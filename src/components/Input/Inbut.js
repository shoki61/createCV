import React from 'react';
import { TextInput } from 'react-native';


const input = props => {
    const {
        onChangeText,
        placeholder
    } = props;

    return (
        <TextInput
            style={{}}
            placeholder={{ placeholder }}
            onChangeText={onChangeText} />
            
    )
};

export default input;