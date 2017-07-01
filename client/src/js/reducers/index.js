import { combineReducers } from "redux"

import user from "./userReducer"
import tweets from "./tweetReducer"
import lists from "./listsReducer"

export default combineReducers({
	user : user,//user reducer can only acess user object
	tweets : tweets,
	lists : lists
})