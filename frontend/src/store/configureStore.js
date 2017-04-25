import { createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  const store = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  )(createStore)(rootReducer, initialState)
  return store
}
