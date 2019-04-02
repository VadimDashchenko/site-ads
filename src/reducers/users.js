import UUID from 'uuid/v4';
import {
    USERS_CREATE_USER,
    USERS_UPDATE_EDITABLE_USER,
    USERS_RESET_EDITABLE_USER,
    USERS_AUTH_USER_SUCCESS,
    USERS_SET_EDITABLE_USER_BY_ID,
    USERS_FETCH_USERS_LIST,
    USERS_ADD_EDITABLE_USER,
} from "../actions/users";

const initialState = {
        userList: [],
        list:[],
        editableUser: {
            id: null,
            name: '',
            password: ''
        },
    isAuth: false,
    loadUsers: false,
    };

export default ( state = initialState, action) => {
    switch (action.type) {
        case USERS_CREATE_USER: {
            return {
                ...state,
                list: [
                    ...state.list,{
                        ...action.payload,
                        id: UUID()
                    }
                ]
            }
        }
        case USERS_ADD_EDITABLE_USER: {
            return{
                ...state,
                list: [
                    ...state.list,{
                        ...action.payload
            }
                ]
            }
        }
        case USERS_UPDATE_EDITABLE_USER: {
            return {
                ...state,
                editableUser: {
                    ...state.editableUser,
                    ...action.payload
                }

                    }
        }
        case USERS_RESET_EDITABLE_USER: {
            return {
                ...state,
                editableUser: {
                    ...initialState.editableUser
                }
            }
        }
        case USERS_AUTH_USER_SUCCESS: {
            return {
                ...state,
                isAuth: true
            }
        }
        case USERS_SET_EDITABLE_USER_BY_ID: {
            return{
                ...state,
                list: [
                ...state.list,
                ...action.payload
            ]
            }
        }
        case USERS_FETCH_USERS_LIST: {
            return{
                ...state,
                userList: action.payload,
                loadUsers:true
            }
        }
        // case USERS_CREATE_USER: {
        //     return state.updateIn(['list'], list => list.push(fromJS(action.payload).set('id', UUID())));
        // }
        // case USERS_UPDATE_EDITABLE_USER: {
        //     return state.mergeIn(['editableUser'], fromJS(action.payload));
        // }
        // case USERS_FETCH_USERS_LIST: {
        //     return state.set('userList', fromJS(action.payload));
        // }
        default: {
            return state
        }
    }
}