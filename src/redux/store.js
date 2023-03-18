import { configureStore } from '@reduxjs/toolkit';
import phoneBookReducer from './contactSlice';
const store = configureStore({
  name: 'phonebook',
  reducer: {
    phonebook: phoneBookReducer,
  },
});

export default store;
