import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  heroes: [],
  fetching: 'idle'
}

const heroes = createSlice({
 name: 'heroes',
 initialState,
 reducers:{
  heroesFetching: state => {
   state.fetching = 'loading'
  },
  heroesFetched: (state, action) => {
   state.heroes = action.payload;
   state.fetching = 'loaded'
  },
  heroesFetchingError: state => {
   state.fetching = 'error'
  },
  heroesDeleted: (state, action) => {
    state.heroes = state.heroes.filter(item => item.id !== action.payload)
  },
  heroesCreated: (state, action) => {
    state.heroes.push(action.payload)
    state.fetching = 'loaded'
  }
 }
})

 const {reducer, actions} = heroes;

export const {
  heroesFetching,
  heroesFetched,
  heroesFetchingError,
  heroesDeleted,
  heroesCreated} = actions;

export default reducer;