import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operation';

const initialContacts = {
  items: [],
  isLoading: false,
  error: null,
};

const contacts = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })

      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })

      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.error = payload;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.error = payload;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(({ id }) => id !== payload.id);
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.error = payload;
      });
  },
});

export const contactsReducer = contacts.reducer;
