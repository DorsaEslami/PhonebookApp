import { combineReducers } from '@reduxjs/toolkit';
import contactSlice from '../reducers/contactSlice';

const rootReducer = combineReducers({
  contact: contactSlice
});


export default rootReducer;