import * as actionType from './actionType';

export const addAbilitie = abilitie => {
    return {
        type: actionType.ADD_ABILITIES,
        abilitie: abilitie
    };
};

export const addCommunity = community => {
    return {
        type: actionType.ADD_COMMUNITIES,
        community: community
    };
};

export const addCompany = company => {
    return {
        type: actionType.ADD_COMPANIES,
        company: company
    };
};

export const addDrivingLicence = drivingLicence => {
    return {
        type: actionType.ADD_DRIVING_LICENCES,
        drivingLicence: drivingLicence
    };
};

export const addHobby = hobby => {
    return {
        type: actionType.ADD_HOBBIES,
        hobby: hobby
    };
};

export const addLanguage = language => {
    return {
        type: actionType.ADD_LANGUAGES,
        language: language
    };
};

export const addLink = link => {
    return {
        type: actionType.ADD_LINKS,
        link: link
    };
};

export const addProject = project => {
    return {
        type: actionType.ADD_PROJECTS,
        project: project
    };
};

export const addReference = reference => {
    return {
        type: actionType.ADD_REFERENCES,
        reference: reference,
    };
};

export const addSchool = school => {
    return {
        type: actionType.ADD_SCHOOLS,
        school: school
    };
};