import { createStore, combineReducers } from "@reduxjs/toolkit";
import heroes from "../redusers/heroes";
import filters from "../redusers/filters";

const store = createStore(
combineReducers({heroes, filters})
)

export default store;
