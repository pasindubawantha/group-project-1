export default function reducer(state={}, action){
	switch(action.type){
		case "CREATING_USER_SESSION" : {
			state = {...state, 
				SessionID: {fetched: false, 
					fetching: true,
					value: null,
					error: null} 
				}
			break;
		}
		case "CREATING_USER_SESSION_REJECTED" : {
			state = {...state,
				SessionID: {fetched: false, 
					fetching: false,
					value: null,
					error: action.payload} 
				}
			break;
		}
		case "CREATING_USER_SESSION_FULFILLED" : {
			state = {...state, 
				SessionID: {fetched: true, 
					fetching: false,
					value: action.payload.data.value,
					error: null} 
				}
			break;
		}
		case "CREATING_USER_SESSION_FULFILLED_Example" : {
			state = {...state, 
				SessionID: {...state.SessionID, 
					error : action.payload} 
				}
			break;
		}
	}
	return state;
};






