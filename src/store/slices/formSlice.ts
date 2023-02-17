import { createSlice } from '@reduxjs/toolkit';

//create contact

const formSlice: any = createSlice({
  name: 'form',
  initialState: {
    name: '',
    surname: '',
    age: 0,
    mail: '',
    adress: '',
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeSurname(state, action) {
      state.surname = action.payload;
    },
    changeAge(state, action) {
      state.age = action.payload;
    },
    changeMail(state, action) {
      state.mail = action.payload;
    },
    changeAdress(state, action) {
      state.adress = action.payload;
    },
  },
});

export const {
  changeName,
  changeSurname,
  changeAge,
  changeMail,
  changeAdress,
} = formSlice.actions;
export const formReducer = formSlice.reducer;
