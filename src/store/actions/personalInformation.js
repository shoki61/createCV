import * as actionType from './actionType';

export const setName = name => {
    return {
        type: actionType.NAME,
        name: name
    }
};

export const setTelNumber = number => {
    return {
        type: actionType.TEL_NUMBER,
        number: number
    }
};

export const setGender = gender => {
    return {
        type: actionType.GENDER,
        gender: gender
    }
};

export const setEmail = email => {
    return {
        type: actionType.EMAIL,
        email: email
    }
};

export const setCity = city => {
    return {
        type: actionType.CITY,
        city: city
    }
};

export const setJob = job => {
    return {
        type: actionType.JOB,
        job: job
    }
};

export const setPostalCode = code => {
    return {
        type: actionType.POSTALCODE,
        code: code
    }
};


