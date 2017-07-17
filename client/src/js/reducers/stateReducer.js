const defaulSate = {
        "list":{
            "all":[],
            "show":[],
            "selected":[]
        }
    }

export default function(state=defaulSate, action){
	switch(action.type){
		case "UPDATE_STATE_LIST_ALL" : {
			state = {...state,
				list:{...state.list,
					all: action.payload
				} 	 
			}
			break;
		}
		case "UPDATE_STATE_LIST_SHOW" : {
			state = {...state,
				list:{...state.list,
					show: action.payload
				} 	 
			}
			break;
		}
		case "UPDATE_STATE_LIST_SELECTED" : {
			state = {...state,
				list:{...state.list,
					selected: action.payload
				} 	 
			}
			break;
		}
		case "UPDATE_STATE_LIST_ID" : {
			state = {...state,
				list:{...state.list,
					id: action.payload
				} 	 
			}
			break;
		}
	}
	return state;
};