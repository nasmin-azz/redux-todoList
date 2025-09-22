import { createStore } from "redux";
import  todoReducer  from "./todoReducer";
import { v4 as uuidv4 } from "uuid";

let store = createStore(todoReducer);
export default store;



