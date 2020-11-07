import * as actionType from '../actions/actionType';

const initialState = {
    selectedCVType:'',
    selectedCVColor: '',
    cvId: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SELECTED_CV:
            return {
                ...state,
                selectedCVType: action.cvType,
                cvId: action.cvId
            };
        case actionType.SELECTED_CV_COLOR:
            return {
                ...state,
                selectedCVColor: action.cvColor
            };
    }
};

export default reducer;