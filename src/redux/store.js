import { combineReducers, createStore } from "redux";
import { rootReducer} from "./reducers/rootReducer"
export const store = createStore(rootReducer)

export default store;
