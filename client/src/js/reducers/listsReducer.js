const defaulSate = {
	vendors: []
	}

export default function(state=defaulSate, action){
	switch(action.type){
		case "FETCHING_LIST_customers_PENDING" : {
			state = {...state, 
					customers : {
						downloaded:false,
						downloading:true,
						error:null,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_customers_REJECTED" : {
			state = {...state, 
					customers : {
						downloaded:false,
						downloading:false,
						error: action.payload,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_customers_FULFILLED" : {
			state = {...state, 
					customers : {
						downloaded:true,
						downloading:false,
						error: null,
						data:action.payload.data
					}
				}
			break;
		}
		case "FETCHING_LIST_employees_PENDING" : {
			state = {...state, 
					employees : {
						downloaded:false,
						downloading:true,
						error:null,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_employees_REJECTED" : {
			state = {...state, 
					employees : {
						downloaded:false,
						downloading:false,
						error: action.payload,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_employees_FULFILLED" : {
			state = {...state, 
					employees : {
						downloaded:true,
						downloading:false,
						error: null,
						data:action.payload.data
					}
				}
			break;
		}
		case "FETCHING_LIST_vendors_PENDING" : {
			state = {...state, 
					vendors : {
						downloaded:false,
						downloading:true,
						error:null,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_vendors_REJECTED" : {
			state = {...state, 
					vendors : {
						downloaded:false,
						downloading:false,
						error: action.payload,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_vendors_FULFILLED" : {
			state = {...state, 
					vendors : {
						downloaded:true,
						downloading:false,
						error: null,
						data:action.payload.data
					}
				}
			break;
		}
		case "FETCHING_LIST_projects_PENDING" : {
			state = {...state, 
					projects : {
						downloaded:false,
						downloading:true,
						error:null,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_projects_REJECTED" : {
			state = {...state, 
					projects : {
						downloaded:false,
						downloading:false,
						error: action.payload,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_projects_FULFILLED" : {
			state = {...state, 
					projects : {
						downloaded:true,
						downloading:false,
						error: null,
						data:action.payload.data
					}
				}
			break;
		}
		case "FETCHING_LIST_transactions_PENDING" : {
			state = {...state, 
					transactions : {
						downloaded:false,
						downloading:true,
						error:null,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_transactions_REJECTED" : {
			state = {...state, 
					transactions : {
						downloaded:false,
						downloading:false,
						error: action.payload,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_transactions_FULFILLED" : {
			state = {...state, 
					transactions : {
						downloaded:true,
						downloading:false,
						error: null,
						data:action.payload.data
					}
				}
			break;
		}
		case "FETCHING_LIST_roles_PENDING" : {
			state = {...state, 
					roles : {
						downloaded:false,
						downloading:true,
						error:null,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_roles_REJECTED" : {
			state = {...state, 
					roles : {
						downloaded:false,
						downloading:false,
						error: action.payload,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_roles_FULFILLED" : {
			state = {...state, 
					roles : {
						downloaded:true,
						downloading:false,
						error: null,
						data:action.payload.data
					}
				}
			break;
		}
	}
	return state;
};