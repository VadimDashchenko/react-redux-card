export const SET_FILTER = 'SET_FILTER';

export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

export const setFilter = payload => ({
    type: SET_FILTER,
    payload
});

export const setSearchQuery = payload => ({
    type: SET_SEARCH_QUERY,
    payload
});