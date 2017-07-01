import axios from "axios";

export function fetchTweetsThunkWat(){
	return function(dispatch) {//for Thunk
		dispatch({type: "FETCH_USERS_START"})
		axios.get("url")
			.then((response) => {
				dispatch({type: "RECEIVE_USERS", payload: response.data})
			})
			.catch((err) => {
				dispatch({type: "FETCH_USERS_ERROR", payload: err})
			})
	}
}

export function fetchTweets(){
	return {//promise way
		type: "FETCH_USERS",//_PENDING,_REJECTED,_FULFILLED
		payload: axios.get("url")
	} 
}