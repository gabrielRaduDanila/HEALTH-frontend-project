import { createSlice } from '@reduxjs/toolkit';
import { searchProducts, addDayProduct, removeProduct } from './operations';

const initialState = {
  date: null,
  mobileMenu: false,
  searchValue: '',
  findedProducts: [],
  isLoading: false,
  isError: false,
  userMobileAddProduct: false,
};

const userDiarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    openMobileMenu: (state) => {
      state.mobileMenu = true;
    },
    closeMobileMenu: (state) => {
      state.mobileMenu = false;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    resetSearchValue: (state) => {
      state.searchValue = '';
    },
    resetFindedProducts: (state) => {
      state.findedProducts = [];
    },
    openAddProduct: (state) => {
      state.userMobileAddProduct = true;
    },
    closeAddProduct: (state) => {
      state.userMobileAddProduct = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.findedProducts = action.payload.products;
      })
      .addCase(searchProducts.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(addDayProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addDayProduct.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addDayProduct.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(removeProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(removeProduct.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const {
  openMobileMenu,
  closeMobileMenu,
  setDate,
  resetFindedProducts,
  resetSearchValue,
  setSearchValue,
  openAddProduct,
  closeAddProduct,
} = userDiarySlice.actions;

export default userDiarySlice.reducer;
