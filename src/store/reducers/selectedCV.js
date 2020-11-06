import * as actionType from '../actions/actionType';

const initialState = {
    selectedCVType:'',
    selectedCVColor:''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SELECTED_CV:
            return {
                ...state,
                selectedCVType: value
            };
        case actionType.SELECTED_CV_COLOR:
            return {
                ...state,
                selectedCVColor: value
            };
    }
};

export default reducer;