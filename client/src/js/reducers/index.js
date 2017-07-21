import { combineReducers } from "redux"

import url from './urlReducer'
import user from "./userReducer"
import apps from "./appsReducer"
import state from "./stateReducer"
import lists from "./listsReducer"

export default combineReducers({
	user : user,//user reducer can only acess user object
	apps : apps,
	url: url,
	state: state,
	lists: lists
})