import { createSlice } from '@reduxjs/toolkit';
import { getDailyCalories } from './operations';

const initialState = {
  calories: {
    neededCalories: null,
    neededCaloriesForDesiredWeight: null,
  },
  nonRecCategories: [],
  isLoading: false,
  isError: false,
  modalIsOpen: false,
};

const userDataSlice = createSlice({
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
        state.calories = action.payload.userInfo.calories;
        state.nonRecCategories = action.payload.userInfo.nonRecCategories;
      })
      .addCase(getDailyCalories.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const { openModal, closeModal } = userDataSlice.actions;

export default userDataSlice.reducer;
