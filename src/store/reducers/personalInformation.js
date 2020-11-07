import * as actionType from '../actions/actionType';

const initialState = {
    name: '',
    telNumber: '',
    email: '',
    gender: '',
    birthDay:'',
    city: '',
    job: '',
    postalCode: '',
    photoSource: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.NAME:
            return {
                ...state,
            };
        case actionType.EMAIL:
            return {
                ...state,
            };
        case actionType.GENDER:
            return {
                ...state,
            };
        case actionType.PHOTO_SOURCE:
            return {
                ...state,
            };
        case actionType.BIRTHDAY:
            return {
                ...state,
            };
        case actionType.TEL_NUMBER:
            return {
                ...state,
            };
        case actionType.CITY:
            return {
                ...state,
            };
        case actionType.JOB:
            return {
                ...state,
            };
        case actionType.POSTAL_CODE:
            return {
                ...state,
            };
        
        default: return state;
    }
};

export default reducer;
