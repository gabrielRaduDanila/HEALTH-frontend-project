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
// import modalReducer from './features/modal/modalSlice';

// const persistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    // auth: persistedAuthReducer,
    loading: loadingReducer,
    dailyCalories: dailyCaloriesReducer,
    // modal: modalReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
