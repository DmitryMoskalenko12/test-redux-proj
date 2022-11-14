import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import heroes from "../components/heroesList/heroesSlice";
import filters from "../redusers/filters";

const stringMiddleware = () => (next) => (action) =>{
 if (typeof action === 'string') {
  return next({
    type: action
  })
 } else {
  return next(action)
}
}

const store = configureStore({
reducer: {heroes, filters},
middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
devTools: process.env.NODE_ENV !== 'production'

})

export default store;
