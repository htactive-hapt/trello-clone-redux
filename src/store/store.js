import { createStore } from "redux";
import rootReducer from "../reducers"

import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = () => { }

const store = createStore(rootReducer, composeWithDevTools());

export default store;
