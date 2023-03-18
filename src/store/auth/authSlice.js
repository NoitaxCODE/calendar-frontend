import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'authenticated', 'not-authenticated',
        user: {},
        errorMessage: undefined,
        register: true
    },
    reducers: {
      onChecking: ( state ) => {
        state.status = 'checking';
        state.user = {};
        state.errorMessage = undefined;
      },
      onLogin: ( state, { payload } ) => {
        state.status = 'authenticated';
        state.user = payload;
        state.errorMessage = undefined;
      },
      onLogout: ( state, { payload } ) => {
        state.status = 'not-authenticated';
        state.user = {};
        state.errorMessage = payload;
      },
      clearErrorMessage: ( state ) => {
        state.errorMessage = undefined;
      },
      setRegister: ( state, { payload } ) => {
        state.register = payload
      }
    }
});

export const { onChecking, onLogin, onLogout, clearErrorMessage, setRegister } = authSlice.actions;