export const selectNeededCaloriesForDesiredWeight = (state) =>
  state.dailyCalories.calories.neededCaloriesForDesiredWeight;

export const selectNeededCalories = (state) =>
  state.dailyCalories.calories.neededCalories;

export const selectIsLoading = (state) => state.dailyCalories.isLoading;

export const selectModalIsOpen = (state) => state.dailyCalories.modalIsOpen;
export const selectIsError = (state) => state.dailyCalories.isError;
