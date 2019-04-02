import {
    PAGES_CREATE_AD,
    PAGES_ADD_EDITABLE_AD,
    PAGES_RESET_EDITABLE_AD,
    PAGES_REDIRECT_PAGE,
    PAGES_SET_DATE,
    PAGES_SET_AUTHOR_NAME,
    PAGES_FETCH_ADS_LIST,
    PAGES_DELETE_PAGE
} from "../actions/pages";

import UUID from 'uuid/v4';

const initialState = {
    getList: [],
    listAd: [],
    editableAd: {
        id: null,
        title: '',
        description: '',
        authorName: '',
        createAtDataTime: null
    },
    loadAds: false,
    redirect: false,
    delete: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case PAGES_CREATE_AD :{
            return {
                ...state,
                listAd: [
                    ...state.listAd,
                    {
                        ...action.payload,
                        id: UUID(),
                        createAtDataTime: state.editableAd.createAtDataTime,
                        authorName: state.editableAd.authorName
                    }
                ],
                redirect: true
            };
        }

        case PAGES_ADD_EDITABLE_AD: {
            return {
                ...state,
                editableAd: {
                    ...state.editableAd,
                    ...action.payload
                }
            }
        }
        case PAGES_RESET_EDITABLE_AD: {
            return {
                ...state,
                editableAd: {
                    ...initialState.editableAd
                }
            }
        }
        case PAGES_REDIRECT_PAGE: {
            return{
                ...state,
                redirect:true,

            }
        }
        case PAGES_SET_DATE: {
            return{
                ...state,
                editableAd: {
                    ...state.editableAd,
                    createAtDataTime: action.payload
                }
            }
        }
        case PAGES_SET_AUTHOR_NAME: {
            return{
                ...state,
                editableAd: {
                    ...state.editableAd,
                    authorName: action.payload
                }
            }
        }
        case PAGES_FETCH_ADS_LIST: {
            return{
                ...state,
                getList: action.payload,
                loadAds: true
            }
        }
        case PAGES_DELETE_PAGE: {
            return{
                ...state,
                delete:true,
                getList: state.getList.filter( o => o.id !== action.payload),
                listAd: state.listAd.filter(o => o.id !== action.payload)
            }
        }
        default: {
            return state;
        }
    }
}