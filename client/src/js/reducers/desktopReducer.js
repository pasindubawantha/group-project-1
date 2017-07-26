const defaulSate = {
	vendors: []
	}

export default function(state=defaulSate, action){
	switch(action.type){
		case "UPDATE_DESKTOP" : {
			state = action.payload
			break;
		}
	}
	return state;
};