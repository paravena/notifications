import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FetchStatus, Notification } from '../models';
import '../mocking/server';

type NotificationsState = {
  notifications: Notification[];
  status: FetchStatus;
  error?: string;
};

const INITIAL_STATE: NotificationsState = {
  notifications: [],
  status: FetchStatus.IDLE,
  error: undefined,
};

export const fetchNotifications = createAsyncThunk<Notification[], void>(
  'notifications/fetch',
  async () => {
    console.log('before fetching');
    const response = await fetch(`/api/anomaly-service/unread`);
    console.log('response ', response);
    const data = await response.json();
    console.log('data', data);
    return data;
  },
);

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNotifications.pending, state => {
        state.status = FetchStatus.LOADING;
      })
      .addCase(
        fetchNotifications.fulfilled,
        (state, action: PayloadAction<Notification[]>) => {
          state.status = FetchStatus.SUCCEEDED;
          state.notifications = action.payload;
        },
      )
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.status = FetchStatus.FAILED;
        state.error = action.error.message;
      });
  },
});

export default notificationsSlice.reducer;
