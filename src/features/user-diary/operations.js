import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const searchProducts = createAsyncThunk(
  'users/search-products',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.get(`/api/health/products?query=` + credentials);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addDayProduct = createAsyncThunk(
  'users/add-product',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(`/api/health/users/daily`, credentials);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeProduct = createAsyncThunk(
  'users/delete-product',
  async (credentials, thunkAPI) => {
    try {
      const id = credentials._id;
      const response = await axios.delete('/api/health/users/daily/' + id);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
