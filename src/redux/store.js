import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist';
import { filterSlice } from './filterSlice/filterSlice';
import {persistContactsReduser } from './contactsSlice/contactsSlice';






export const store = configureStore({
    reducer: {
        contacts: persistContactsReduser,
        filter: filterSlice.reducer,
  },
   middleware(getDefaultMiddleware){
   return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })},
})

export const persisotor = persistStore(store);

