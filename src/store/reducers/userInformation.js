import * as actionType from '../actions/actionType';

const initiolState = {
    name: '',
    telNumber: '',
    email: '',
    gender: '',
    city: '',
    job: '',
    postalCode: '',
    drivingLicences: [],
    links: [],
    hobbies: [],
    languages: [],
    abilities: [],
    schools: [],
    projects: [],
    communities: [],
    companies: [],
    references: [],
};

const reducer = (state = initiolState, action) => {
    switch (action.type) {
        case actionType.ADD_ABILITIES: return {...state};
        case actionType.ADD_COMMUNITIES: return {...state};
        case actionType.ADD_COMPANIES: return {...state};
        case actionType.ADD_DRIVING_LICENCES: return {...state};
        case actionType.ADD_HOBBIES: return {...state};
        case actionType.ADD_LANGUAGES: return {...state};
        case actionType.ADD_LINKS: return {...state};
        case actionType.ADD_PROJECTS: return {...state};
        case actionType.ADD_REFERENCES: return {...state};
        case actionType.ADD_SCHOOLS: return { ...state };

        case actionType.REMOVE_ABILITIES: return {...state};
        case actionType.REMOVE_COMMUNITIES: return {...state};
        case actionType.REMOVE_COMPANIES: return {...state};
        case actionType.REMOVE_DRIVING_LICENCES: return {...state};
        case actionType.REMOVE_HOBBIES: return {...state};
        case actionType.REMOVE_LANGUAGES: return {...state};
        case actionType.REMOVE_LINKS: return {...state};
        case actionType.REMOVE_PROJECTS: return {...state};
        case actionType.REMOVE_REFERENCES: return {...state};
        case actionType.REMOVE_SCHOOLS: return {...state};
        default: return state;
    }
};

export default reducer;
