import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useHttp from "../../hooks/http.hook";

export const filtersFetch = createAsyncThunk(
  'filters/fetch',
  () => {
    const {request} = useHttp();
   return request('http://localhost:3001/filters')
  }
)
const initialState = {
  filters: [],
  fetching: 'idle',
  activeFilter: 'all'
}

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
      state.filters = action.payload
      state.fetching = 'loaded'
    })
    .addCase(filtersFetch.rejected, state => {
      state.fetching = 'error'
    })
    .addDefaultCase(() => {})
  }
})

const {reducer, actions} = filters

export const {
  activeFilter
} = actions

export default reducer;