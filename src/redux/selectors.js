import { createSelector } from '@reduxjs/toolkit';

export const arrContacts = state => state.contacts.items;
export const filterValue = state => state.filter;
export const IsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const filteredContacts = createSelector(
  [arrContacts, filterValue],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
