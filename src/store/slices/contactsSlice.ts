import { createSlice, nanoid } from '@reduxjs/toolkit';

type TestState = any[];

const contacts: TestState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    searchTerm: '',
    contacts,
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addContact(state, action) {
      state.contacts.push({
        name: action.payload.name,
        surname: action.payload.surname,
        age: action.payload.age,
        mail: action.payload.mail,
        adress: action.payload.adress,
        id: nanoid(),
      });
    },
  },
});

export const { changeSearchTerm, addContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
