import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getDailyCalories = createAsyncThunk(
  'dailyCalories/fetch',
  async (credentials, thunkAPI) => {
    try {
      console.log(credentials);
      const response = await axios.post(
        '/api/health/calculate-calories',
        credentials
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
