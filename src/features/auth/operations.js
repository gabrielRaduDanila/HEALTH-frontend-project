import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:5000';

// Utility to add JWT

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/api/health/users/register', credentials);

      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const {
      auth: { token },
    } = thunkAPI.getState();
    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch user.');
    }

    try {
      setAuthHeader(token);
      const response = await axios.get('/api/health/users/current');
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const login = createAsyncThunk(
  'contacts/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/api/health/users/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (err) {
      if (err.message === 'Request failed with status code 400') {
        return thunkAPI.rejectWithValue(err.message);
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'contacts/logOut',
  async (_, thunkAPI) => {
    try {
      await axios.post('/api/health/users/logout');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
