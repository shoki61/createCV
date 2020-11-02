import React from 'react';
import { TouchableOpacity } from 'react-native';


const button = props => {
    const {
        title,
        width,
        height,
        borderRadius,
        backgrounColor,
        color,
        clicked
    } = props;
    return (
        <TouchableOpacity
            onPress={clicked}
            style={{
                width: width,
                height: height,
                backgroundColor: backgrounColor,
                borderRadius: borderRadius,
                color: color
            }}>
            {title}
        </TouchableOpacity>
    )
};

export default button;