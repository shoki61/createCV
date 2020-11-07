import * as actionType from '../actions/actionType';

const initiolState = {
    name: '',
    telNumber: '',
    email: '',
    gender: '',
    city: '',
    job: '',
    postalCode: ''
};

const reducer = (state = initiolState, action) => {
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
        case actionType.POSTALCODE:
            return {
                ...state,
            };
        
        default: return state;
    }
};

export default reducer;
