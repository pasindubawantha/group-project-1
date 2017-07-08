const defaulSate = {
	vendors: []
	}

export default function(state=defaulSate, action){
	switch(action.type){
		case "FETCHINGING_LIST" : {
			state = {...state, 
					vendors : [{name: "v1",ID: "1"},{name: "v2",ID:"2"}]
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