export const ADD_BOOK_TO_CART = 'ADD_BOOK_TO_CART';

export const REMOVE_BOOK_FROM_CART = 'REMOVE_BOOK_FROM_CART';

export const addBookToCart = payload => ({
    type: 'ADD_BOOK_TO_CART',
    payload
});

export const removeBookFromCart = payload => ({
    type: 'REMOVE_BOOK_FROM_CART',
    payload
});