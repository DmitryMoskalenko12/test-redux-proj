import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: [],
  fetching: 'idle',
  activeFilter: 'all'
}

const filters = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filtersFetching: state =>{
      state.fetching = 'loading'
    },
    filtersFetched: (state, action) => {
      state.filters = action.payload
      state.fetching = 'loaded'
    },
    filtersFetchingError: state => {
      state.fetching = 'error'
    },
    activeFilter: (state, action) => {
      state.activeFilter = action.payload
      state.fetching = 'loaded'
    }

  }
})

const {reducer, actions} = filters

export const {
  filtersFetching,
  filtersFetched,
  filtersFetchingError,
  activeFilter
} = actions

export default reducer;