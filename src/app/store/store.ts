import { configureStore } from '@reduxjs/toolkit';
import { travelApi } from '../../api/api';

export const store = configureStore({
  reducer: {
    [travelApi.reducerPath]: travelApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(travelApi.middleware),
});
