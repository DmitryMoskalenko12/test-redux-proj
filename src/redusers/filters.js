const initialState = {
  filters: [],
  fetching: 'idle',
  activeFilter: 'all'
}
const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTERS__FETCHING':
      return{
        ...state,
        fetching: 'loading'
      }
    case 'FILTERS__FETCHED':
      return{
        ...state,
        filters: action.payload,
        fetching: 'loaded'
      } 
    case 'FILTERS__FETCHING__ERROR':
    return{
      ...state,
      fetching: 'error'
    } 
    case 'ACTIVE__FILTER':
      return{
        ...state,
        activeFilter: action.payload
      } 
  
    default:
      return state
  }
}

export default filters;