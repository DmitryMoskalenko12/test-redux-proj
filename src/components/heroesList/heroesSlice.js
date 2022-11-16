import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import useHttp from "../../hooks/http.hook";

const entityAdapter = createEntityAdapter();
const initialState = entityAdapter.getInitialState({fetching: 'idle'})

export const heroesFetch = createAsyncThunk(
  'heroes/fetch',
    () =>{
    const {request} = useHttp()
    return request('http://localhost:3001/heroes')
  }
)

const heroes = createSlice({
 name: 'heroes',
 initialState,
 reducers:{
  heroesDeleted: (state, action) => {
   entityAdapter.removeOne(state, action.payload)
  },
  heroesCreated: (state, action) => {
   entityAdapter.addOne(state, action.payload)
    state.fetching = 'loaded'
  }
 },
 extraReducers: builder =>{
  builder
  .addCase(heroesFetch.pending, state => {
    state.fetching = 'loading'
  })
  .addCase(heroesFetch.fulfilled, (state, action) => {
     entityAdapter.setAll(state, action.payload)
     state.fetching = 'loaded'
   })
  .addCase(heroesFetch.rejected, state => {
    state.fetching = 'error'
   })
  .addDefaultCase(() => {})
 }
})


 const {selectAll} = entityAdapter.getSelectors(state => state.heroes)

 export const result = createSelector(
  selectAll, /* автоматически стейт приходит и селектолл видит его */
  state => state.filters.activeFilter,
  (heroes, filters) =>{
    if (filters === 'all') {
      return heroes
    }else {
     return heroes.filter(item => item.element === filters)
    } 
  }
)

 const {reducer, actions} = heroes;

export const {
  heroesDeleted,
  heroesCreated} = actions;
export default reducer;