export const USERS_CREATE_USER = 'USERS_CREATE_USER';

export const USERS_UPDATE_EDITABLE_USER = 'USERS_UPDATE_EDITABLE_USER';

export const USERS_ADD_EDITABLE_USER = 'USERS_ADD_EDITABLE_USER';

export const USERS_RESET_EDITABLE_USER = 'USERS_RESET_EDITABLE_USER';

export const USERS_AUTH_USER_SUCCESS = 'USERS_AUTH_USER_SUCCESS';

export const USERS_AUTH_USER_ERROR = 'USERS_AUTH_USER_ERROR';

export const USERS_GET_USER_REQUEST = 'USERS_GET_USER_REQUEST';

export const USERS_SET_EDITABLE_USER_BY_ID = 'USERS_SET_EDITABLE_USER_BY_ID';

export const USERS_FETCH_USERS_LIST = 'USERS_FETCH_USERS_LIST';

export const USERS_LOGGED_USER = 'USERS_LOGGED_USER';

export const createUser = payload   => ({
   type: USERS_CREATE_USER,
   payload
});

export const addUser = payload => ({
    type:USERS_ADD_EDITABLE_USER,
    payload
});

export const updateEditableUser = payload => ({
    type: USERS_UPDATE_EDITABLE_USER,
    payload
});

export const resetEditableUser = payload => ({
   type: USERS_RESET_EDITABLE_USER,
   payload
});

export const authUserSuccess = payload => ({
    type: USERS_AUTH_USER_SUCCESS,
    payload
});

export const authUserError = payload => ({
    type: USERS_AUTH_USER_ERROR,
    payload
});

export const setEditableUserById = payload => ({
   type: USERS_SET_EDITABLE_USER_BY_ID,
   payload
});

export const fetchUsersList = payload => ({
   type: USERS_FETCH_USERS_LIST,
   payload
});

export const loggedUser = payload => ({
   type: USERS_LOGGED_USER,
   payload
});

export const getUserRequest= payload => ({
    type: USERS_GET_USER_REQUEST,
    payload
});