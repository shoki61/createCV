import React from 'react';
import { TouchableOpacity } from 'react-native';


import styles from './style';

const button = props => {
    const {
        title,
        clicked,
        style
    } = props;
    return (
        <TouchableOpacity
            onPress={clicked}
            style={[styles.button,{...style}]}>
            {props.children ? props.children : title}
        </TouchableOpacity>
    )
};

export default button;