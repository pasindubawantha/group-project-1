const defaulSate = {
        "list":{
        	"downloading":false,
            "downloaded":false,
            "error":null,
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
					selected: {...state.list.selected
					}
				} 	 
			}
			state.list.selected[action.payload.listID] = action.payload.array 
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
		case "UPDATE_STATE_LIST_PICKED" : {
			state = {...state,
				list:{...state.list,
					picked: {...state.list.picked
					}
				} 	 
			}
			state.list.picked[action.payload.listID] = action.payload.pickedID
			break;
		}
		case "UPDATE_STATE_UPLOAD_UPLOADING" : {
			state = {...state,
				upload:{...state.upload,
					uploading: action.payload
				} 	 
			}
			break;
		}
		case "UPDATE_STATE_UPLOAD_UPLOADDONE" : {
			state = {...state,
				upload:{...state.upload,
					uploadDone: action.payload
				} 	 
			}
			break;
		}
		case "UPDATE_STATE_UPLOAD_UPLOADFAIL" : {
			state = {...state,
				upload:{...state.upload,
					uploadFail: action.payload
				} 	 
			}
			break;
		}
		case "UPDATE_STATE_UPLOAD_UPLOADERROR" : {
			state = {...state,
				upload:{...state.upload,
					uploadError: action.payload
				} 	 
			}
			break;
		}
		case "DEFAULT_STATE_UPLOAD" : {
			state = {...state,
				upload:{
					uploading:false,
					uploadDone:false,
					uploadFail:false,
					uploadError: null
				} 	 
			}
			break;
		}
		case "UPDATE_STATE_FORM_ID" : {
			state = {...state,
				form:{...state.form,
					id:action.payload
				} 	 
			}
			break;
		}
		case "UPDATE_STATE_FORM_DATA" : {
			state = {...state,
				form:{...state.form,
					data:action.payload
				} 	 
			}
			break;
		}
		case "DOWNLOAD_STATE_LIST_PENDING" : {
			state = {...state,
				list:{...state.list,
					downloading:true,
					downloaded:false,
					error:null,
					all:[],
					show:[]
				}	 
			}
			break;
		}
		case "DOWNLOAD_STATE_LIST_REJECTED" : {
			state = {...state,
				list:{...state.list,
					downloading:false,
					downloaded:false,
					error:action.payload.data,
					all:[],
					show:[]
				}	 
			}
			break;
		}
		case "DOWNLOAD_STATE_LIST_FULFILLED" : {
			state = {...state,
				list:{...state.list,
					downloading:false,
					downloaded:true,
					error:null,
					all:action.payload.data,
					show:[]
				}	 
			}
			break;
		}
	}
	return state;
};