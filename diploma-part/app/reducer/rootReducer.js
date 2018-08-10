import { combineReducers, createStore } from 'redux';
import table from './'

const reducer = combineReducers({
  table
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;