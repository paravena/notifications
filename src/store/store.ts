import { configureStore } from '@reduxjs/toolkit';
import notificationsReducer from './notifications';

const store = configureStore({
  reducer: {
    notifications: notificationsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;

export default store;
