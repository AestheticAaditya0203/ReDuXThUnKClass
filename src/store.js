import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducers/userReducers'

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
