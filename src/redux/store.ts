import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import { api } from './api';

export const store = configureStore({
  reducer: { task: taskReducer, [api.reducerPath]: api.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
