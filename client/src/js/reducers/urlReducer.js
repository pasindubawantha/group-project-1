const defaulSate = {
	url: []
	}

export default function(state=defaulSate, action){
	switch(action.type){
		case "GO_TO_URL" : {
			state = action.payload
			break;
		}
		case "GO_BACK" : {
			state = action.payload
			break;
		}
	}
	return state;
};