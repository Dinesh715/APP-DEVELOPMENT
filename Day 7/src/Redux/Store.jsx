import reducer from "./Reducer";
import { legacy_createStore } from "redux";


const store = legacy_createStore(reducer);

export default store;