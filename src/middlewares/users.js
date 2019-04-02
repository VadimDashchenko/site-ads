import { USERS_CREATE_USER } from '../actions/users';
import {PAGES_CREATE_AD, PAGES_DELETE_PAGE} from "../actions/pages";
import concat from 'lodash/concat';

export default store => next => action => {
    next(action);

    switch (action.type) {
        case USERS_CREATE_USER: {
            const user = store
                .getState()
                .users.list;
            const users = store
                .getState()
                .users.userList;
            let userConcat = concat(users, user);
            return localStorage.setItem('users', JSON.stringify(userConcat))
        }
        case PAGES_CREATE_AD: {
            const ad = store
                .getState()
                .pages.listAd;
            const ads = store
                .getState()
                .pages.getList;
            let adsConcat = concat(ads, ad);
           return localStorage.setItem('ads', JSON.stringify(adsConcat));
        }
        case PAGES_DELETE_PAGE: {
            const ad = store
                .getState()
                .pages.listAd;
            const ads = store
                .getState()
                .pages.getList;
            let adsConcat = concat(ads, ad);
            return localStorage.setItem('ads', JSON.stringify(adsConcat));
        }
    }
}