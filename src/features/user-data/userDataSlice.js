import { createSlice } from '@reduxjs/toolkit';
import { getDailyCalories, getDailyInfo } from './operations';

const initialState = {
  isLoading: false,
  isError: false,
  userModalIsOpen: false,
  dailyInfo: {
    totalProducts: 0,
    totalDayCaloris: 0,
    dayProducts: [],
  },
};

const userDataSlice = createSlice({
  name: 'dailyCalories',
  initialState,
  reducers: {
    openUserModal: (state) => {
      state.userModalIsOpen = true;
    },
    closeUserModal: (state) => {
      state.userModalIsOpen = false;
    },
    deleteProduct: (state, action) => {
      const { _id } = action.payload;
      state.dailyInfo.dayProducts = state.dailyInfo.dayProducts.filter(
        (p) => p._id !== _id
      );
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
      })
      .addCase(getDailyInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDailyInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dailyInfo = action.payload;
      })
      .addCase(getDailyInfo.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const { openUserModal, closeUserModal, deleteProduct } =
  userDataSlice.actions;

export default userDataSlice.reducer;
