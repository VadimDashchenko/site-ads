export const PAGES_ADD_AD = 'PAGES_ADD_AD';

export const PAGES_CREATE_AD = 'PAGES_CREATE_AD';

export const PAGES_ADD_EDITABLE_AD = 'PAGES_ADD_EDITABLE_AD';

export const PAGES_RESET_EDITABLE_AD = 'PAGES_RESET_EDITABLE_AD';

export const PAGES_REDIRECT_PAGE = 'PAGES_REDIRECT_PAGE';

export const PAGES_SET_DATE = 'PAGES_SET_DATE';

export const PAGES_SET_AUTHOR_NAME = 'PAGES_SET_AUTHOR_NAME';

export const PAGES_FETCH_ADS_LIST = 'PAGES_FETCH_ADS_LIST';

export const PAGES_DELETE_PAGE = 'PAGES_DELETE_PAGE';

export const addAd = payload => ({
    type: PAGES_ADD_AD,
    payload
});

export const createAd = payload => ({
    type: PAGES_CREATE_AD,
    payload
});

export const addEditableAd = payload => ({
    type: PAGES_ADD_EDITABLE_AD,
    payload
});

export const resetEditableAd = payload => ({
   type: PAGES_RESET_EDITABLE_AD,
   payload
});

export const redirectPage = payload => ({
    type: PAGES_REDIRECT_PAGE,
    payload
});

export const setDate = payload => ({
   type: PAGES_SET_DATE,
   payload
});

export const setAuthorName = payload => ({
    type: PAGES_SET_AUTHOR_NAME,
    payload
});

export const fetchAdsList = payload => ({
    type: PAGES_FETCH_ADS_LIST,
    payload
});

export const deletePage = payload => ({
   type: PAGES_DELETE_PAGE,
   payload
});