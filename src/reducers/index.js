import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import signup from './signup';

const rootReducer = combineReducers({
  routing: routerReducer,
  signup,
  form: formReducer,
});

export default rootReducer;
