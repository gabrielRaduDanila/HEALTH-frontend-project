import { createSlice } from '@reduxjs/toolkit';
import { getDailyCalories } from './operations';

const initialState = {
  calories: {
    neededCalories: null,
    neededCaloriesForDesiredWeight: null,
  },
  nonRecCategories: null,
  isLoading: false,
  modalIsOpen: false,
  isError: false,
};

const dailyCaloriesSlice = createSlice({
  name: 'dailyCalories',
  initialState,
  reducers: {
    openModal: (state) => {
      state.modalIsOpen = true;
    },
    closeModal: (state) => {
      state.modalIsOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDailyCalories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDailyCalories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.calories = action.payload.calories;
        state.nonRecCategories = action.payload.nonRecCategories;
      })
      .addCase(getDailyCalories.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const { openModal, closeModal } = dailyCaloriesSlice.actions;

export default dailyCaloriesSlice.reducer;
