import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import initialStateObject from './storeObject.json';

//import {routerMiddleware } from 'react-router-redux'
//import createHistory from 'history/createBrowserHistory'

import reducer from "./reducers"

/*const logger = createLogger({
	collapsed: true,
	duration: true,
	timestamp:false,
  // ...options
});*/

//const history = createHistory()
//const routerHistory = routerMiddleware(history)

//const middleWare = applyMiddleware(routerHistory ,logger() , promise(), thunk);
const middleWare = applyMiddleware(thunk, promise(), logger());
const initialState = initialStateObject

// const initialState = {
// 	user: {
// 		SessionID : {
// 			value: null,
// 			fetching: false,
// 			fetched: false,
// 			error: null}
// 	},
// 	tweets: [],
// 	lists: {
// 		vendors: []
// 	}
// }

export default createStore(reducer, initialState, middleWare);

/* normal subscriber I don't think we need to use this ever
store.subscribe(() => {
	console.log(store.getState())
})
*/
 
//store.dispatch({type : "TEST", payload: 1})//normal dispatch

