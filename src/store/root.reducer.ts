import { combineReducers } from 'redux';
import { comicSlice } from './comics/slices/index.slices';
import { ApplicationState } from './root.models';

const createRootReducer = () =>
  combineReducers<ApplicationState>({
    comics: comicSlice.reducer
  })

export default createRootReducer
