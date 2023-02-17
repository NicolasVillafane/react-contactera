import { configureStore } from '@reduxjs/toolkit';
import {
  contactsReducer,
  addContact,
  changeSearchTerm,
} from './slices/contactsSlice';
import {
  formReducer,
  changeName,
  changeSurname,
  changeAge,
  changeMail,
  changeAdress,
} from './slices/formSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    form: formReducer,
  },
});

export {
  store,
  changeName,
  changeSurname,
  changeAge,
  changeMail,
  changeAdress,
  addContact,
  changeSearchTerm,
};
