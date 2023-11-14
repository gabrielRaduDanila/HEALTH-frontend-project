export const selectNeededCaloriesForDesiredWeight = (state) =>
  state.userData.calories.neededCaloriesForDesiredWeight;

export const selectNeededCalories = (state) =>
  state.userData.calories.neededCalories;

export const selectIsLoading = (state) => state.userData.isLoading;

export const selectIsError = (state) => state.userData.isError;

export const selectNonRecCategories = (state) =>
  state.userData.nonRecCategories;
