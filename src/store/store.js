import { createStore, combineReducers } from "@reduxjs/toolkit";
import heroes from "../redusers/heroes";

const store = createStore(
combineReducers({heroes})
)

export default store;
