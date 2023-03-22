import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { charactersReducer } from './CharactersSlice';

const persistConfig = {
  key: 'token',
  storage,
  blacklist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, charactersReducer);

export const rootReducer = combineReducers({
  characters: persistedReducer,
});
