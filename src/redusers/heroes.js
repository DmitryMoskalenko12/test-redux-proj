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
    case 'HEROES__DELETED':
      return{
        ...state,
        heroes: state.heroes.filter(item => item.id !== action.payload),
        fetching: 'loaded'
      } 
    case 'HERO__CREATED':
      const newItem = [...state.heroes, action.payload]
      return{
        ...state,
        heroes: newItem,
        fetching: 'loaded'
      } 
    default:
      return state
  }
}
export default heroes;