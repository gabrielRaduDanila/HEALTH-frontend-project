export const selectIsLoading = (state) => state.userDiary.isLoading;

export const selectIsError = (state) => state.userDiary.isError;

export const selectIsMobileMenu = (state) => state.userDiary.mobileMenu;

export const selectSearchValue = (state) => state.userDiary.searchValue;

export const selectDate = (state) => state.userDiary.date;

export const selectFindedProducts = (state) => state.userDiary.findedProducts;

export const selectUserMobileAddProduct = (state) =>
  state.userDiary.userMobileAddProduct;
