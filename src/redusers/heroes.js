const initialState = {
  heroes: [],
  fetchig: 'idle'
}
const heroes = (state = initialState, action) =>{
  switch (action.type) {
    case 'HEROES__FETCHING':
      return{
        ...state,
        fetching: 'loading'
      }
    case 'HEROES__FETCHED':
      return{
        ...state,
        heroes: action.payload,
        fetching: 'loaded'
      }
    case 'HEROES__FETCHING__ERROR':
      return{
        ...state,
        heroes: action.payload,
        fetching: 'error'
      } 
  
    default:
      return state
  }
}
export default heroes;