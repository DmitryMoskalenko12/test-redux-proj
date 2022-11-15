import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useHttp from "../../hooks/http.hook";

export const heroesFetch = createAsyncThunk(
  'heroes/fetch',
    () =>{
    const {request} = useHttp()
    return request('http://localhost:3001/heroes')
  }
)

const initialState = {
  heroes: [],
  fetching: 'idle'
}

const heroes = createSlice({
 name: 'heroes',
 initialState,
 reducers:{
  heroesDeleted: (state, action) => {
    state.heroes = state.heroes.filter(item => item.id !== action.payload)
  },
  heroesCreated: (state, action) => {
    state.heroes.push(action.payload)
    state.fetching = 'loaded'
  }
 },
 extraReducers: builder =>{
  builder
  .addCase(heroesFetch.pending, state => {
    state.fetching = 'loading'
  })
  .addCase(heroesFetch.fulfilled, (state, action) => {
    state.heroes = action.payload;
    state.fetching = 'loaded'
   })
  .addCase(heroesFetch.rejected, state => {
    state.fetching = 'error'
   })
  .addDefaultCase(() => {})
 }
})

 const {reducer, actions} = heroes;

export const {
  heroesDeleted,
  heroesCreated} = actions;
export default reducer;