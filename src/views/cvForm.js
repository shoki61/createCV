import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, Picker, ScrollView, PermissionsAndroid, FlatList } from 'react-native';
import { Pages } from 'react-native-pages';


import PersonalInformation from '../views/personalInformation';
import Experiences from '../views/experiences';
import SaveCV from '../views/saveCV';


const CVForm = () => {
    return (
        <Pages>
            <PersonalInformation />
            <View style={{flex:1, backgroundColor:'red'}}></View>
        </Pages>
    )
};

export default CVForm;