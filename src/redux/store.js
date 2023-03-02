import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    reducers: {
        add(state, action) {
            state.unshift(action.payload)
        },
        remove(state, action) {
          return  state.filter(contact => contact.id !== action.payload)
        }
    }
})
const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filter(state, action) {
            console.log(action)
        }

    }
})

export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer,
  },
})


export const { add, remove } = contactsSlice.actions;
export const { filter } = filterSlice.actions;