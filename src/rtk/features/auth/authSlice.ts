import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserInfo, MutationLoginArgs } from '../../../graphql/sdk';
import { loginRequest } from '../../../requests/auth';

export type LoadingState = 'idle' | 'pending' | 'error';

export interface AuthState {
  currentUser: UserInfo | null;
  error: string | null;
  loading: LoadingState;
}

const initialState:AuthState = {
  currentUser: null,
  error: null,
  loading: 'idle',
};

const login = createAsyncThunk(
  'auth/login',
  async (user: MutationLoginArgs) => {
    const response = await loginRequest(user);
    return response.user;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginLoading(state, action) {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    loginSuccess(state, action) {
      state.currentUser = action.payload;
      state.loading = 'idle';
      state.error = null;
    },
    loginFailure(state, action) {
      state.error = action.payload;
      state.loading = 'error';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.loading = 'idle';
      state.error = null;
    });
  },
});

export const { loginLoading, loginSuccess, loginFailure } = authSlice.actions;

export default authSlice.reducer;
