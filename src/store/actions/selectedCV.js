import * as actionType from './actionType';

export const setCVType = (cvId,cvType) => {
    return {
        type: actionType.SELECTED_CV,
        cvType: cvType,
        cvId: cvId
    };
};

export const setCVColor = cvColor => {
    return {
        type: actionType.SELECTED_CV_COLOR,
        cvColor: cvColor
    };
};