import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import loadingReducer from './features/loading/loadingSlice';
import dailyCaloriesReducer from './features/dailyCalories/dailyCaloriesSlice';
import { authReducer } from './features/auth/authSlice';
import userDataReducer from './features/user-data/userDataSlice';
import userDiaryReducer from './features/user-diary/diarySlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    loading: loadingReducer,
    dailyCalories: dailyCaloriesReducer,
    userData: userDataReducer,
    userDiary: userDiaryReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
