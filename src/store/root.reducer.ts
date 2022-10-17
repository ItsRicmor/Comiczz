import { combineReducers } from 'redux';
import { ApplicationState } from './root.models';

const createRootReducer = () =>
  combineReducers<ApplicationState>({
  })

export default createRootReducer
