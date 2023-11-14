import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getDailyCalories = createAsyncThunk(
  'user-dailyCalories/fetch',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(
        '/api/health/users/calculate-calories',
        credentials
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
