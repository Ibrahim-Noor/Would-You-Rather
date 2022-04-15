import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const storeConfiguration = initialState => {
    const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
    return store;
};

export default storeConfiguration
