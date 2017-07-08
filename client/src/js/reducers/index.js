import { combineReducers } from "redux"

import url from './urlReducer'
import user from "./userReducer"
import lists from "./listsReducer"
import apps from "./appsReducer"

export default combineReducers({
	user : user,//user reducer can only acess user object
	lists : lists,
	apps : apps,
	url: url
})