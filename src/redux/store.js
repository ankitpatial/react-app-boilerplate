import { combineReducers, createStore } from 'redux'


export default function (initialState = {}) {
  const reducers = combineReducers({
    default: (state = {}) => {
      return state
    }
  });

  return createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}
