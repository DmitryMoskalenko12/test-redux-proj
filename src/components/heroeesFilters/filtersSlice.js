import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import useHttp from "../../hooks/http.hook";


const filtersAdapter = createEntityAdapter();
const initialState = filtersAdapter.getInitialState({
  fetching: 'idle',
  activeFilter: 'all'
})

export const filtersFetch = createAsyncThunk(
  'filters/fetch',
  () => {
    const {request} = useHttp();
   return request('http://localhost:3001/filters')
  }
)

const filters = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    activeFilter: (state, action) => {
      state.activeFilter = action.payload
      state.fetching = 'loaded'
    }
  },
  extraReducers: builder => {
    builder
    .addCase(filtersFetch.pending, state => {
      state.fetching = 'loading'
    })
    .addCase(filtersFetch.fulfilled, (state, action) => {
      filtersAdapter.setAll(state, action.payload)
      state.fetching = 'loaded'
    })
    .addCase(filtersFetch.rejected, state => {
      state.fetching = 'error'
    })
    .addDefaultCase(() => {})
  }
})

export const {selectAll} = filtersAdapter.getSelectors(state => state.filters)
const {reducer, actions} = filters

export const {
  activeFilter
} = actions

export default reducer;