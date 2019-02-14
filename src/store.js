import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default () => {
    const store = createStore([], applyMiddleware());
    return store
}

let store = create();

store.dispatch({

});