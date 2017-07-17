const defaulSate = {
	vendors: []
	}

export default function(state=defaulSate, action){
	switch(action.type){
		case "CUSTOMER_PICKCUSTOMER_SHOWLIST_UPDATE" : {
			state = {...state, 
				Customer: {...state.Customer,
					tabs:{...state.Customer.tabs,
						PickCustomer:{...state.Customer.tabs.PickCustomer,
							state:{...state.Customer.tabs.PickCustomer.state,
								"showList":action
								}
							}
						}
					} 
				}
			break;
		}
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