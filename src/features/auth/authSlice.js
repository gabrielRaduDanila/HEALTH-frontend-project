import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  refreshUser,
  addNewContact,
  deleteContact,
  editContact,
  fetchContacts,
  logOut,
  login,
} from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  contacts: [],
  isError: false,
  filter: '',
  errorMessage: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addFilter: (state, { payload }) => {
      const { typedName } = payload;
      state.filter = typedName;
    },
    resetError: state => {
      state.isError = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = true;
        state.errorMessage = action.payload;
        state.isLoading = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(addNewContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addNewContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
      })
      .addCase(addNewContact.rejected, (state, action) => {
        state.isError = true;
        state.errorMessage = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const id = action.payload.id;
        const newContacts = state.contacts.filter(contact => contact.id !== id);
        state.contacts = newContacts;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isError = true;
        state.errorMessage = action.payload;
        state.isLoading = false;
      })
      .addCase(editContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const id = action.payload.id;
        state.contacts.forEach(contact => {
          if (contact.id === id) {
            contact.name = action.payload.name;
            contact.number = action.payload.number;
          }
        });
      })
      .addCase(editContact.rejected, (state, action) => {
        state.isError = true;
        state.errorMessage = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isError = true;
        state.errorMessage = action.payload;
        state.isLoading = false;
      })
      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isError = true;
        state.errorMessage = action.payload;
        state.isLoading = false;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.errorMessage = action.payload;
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { addFilter, resetError } = authSlice.actions;
