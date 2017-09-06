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
		case "FETCHING_LIST_approvalsApprovedMaterial_PENDING" : {
			state = {...state, 
					approvalsApprovedMaterial : {
						downloaded:false,
						downloading:true,
						error:null,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_approvalsApprovedMaterial_REJECTED" : {
			state = {...state, 
					approvalsApprovedMaterial : {
						downloaded:false,
						downloading:false,
						error: action.payload,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_approvalsApprovedMaterial_FULFILLED" : {
			state = {...state, 
					approvalsApprovedMaterial : {
						downloaded:true,
						downloading:false,
						error: null,
						data:action.payload.data
					}
				}
			break;
		}
		case "FETCHING_LIST_approvalsApprovedPayment_PENDING" : {
			state = {...state, 
					approvalsApprovedPayment : {
						downloaded:false,
						downloading:true,
						error:null,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_approvalsApprovedPayment_REJECTED" : {
			state = {...state, 
					approvalsApprovedPayment : {
						downloaded:false,
						downloading:false,
						error: action.payload,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_approvalsApprovedPayment_FULFILLED" : {
			state = {...state, 
					approvalsApprovedPayment : {
						downloaded:true,
						downloading:false,
						error: null,
						data:action.payload.data
					}
				}
			break;
		}
		case "FETCHING_LIST_approvalsDeniedPayment_PENDING" : {
			state = {...state, 
					approvalsDeniedPayment : {
						downloaded:false,
						downloading:true,
						error:null,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_approvalsDeniedPayment_REJECTED" : {
			state = {...state, 
					approvalsDeniedPayment : {
						downloaded:false,
						downloading:false,
						error: action.payload,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_approvalsDeniedPayment_FULFILLED" : {
			state = {...state, 
					approvalsDeniedPayment : {
						downloaded:true,
						downloading:false,
						error: null,
						data:action.payload.data
					}
				}
			break;
		}
		case "FETCHING_LIST_approvalsDeniedMaterial_PENDING" : {
			state = {...state, 
					approvalsDeniedMaterial : {
						downloaded:false,
						downloading:true,
						error:null,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_approvalsDeniedMaterial_REJECTED" : {
			state = {...state, 
					approvalsDeniedMaterial : {
						downloaded:false,
						downloading:false,
						error: action.payload,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_approvalsDeniedMaterial_FULFILLED" : {
			state = {...state, 
					approvalsDeniedMaterial : {
						downloaded:true,
						downloading:false,
						error: null,
						data:action.payload.data
					}
				}
			break;
		}
		case "FETCHING_LIST_approvalsPendingMaterial_PENDING" : {
			state = {...state, 
					approvalsPendingMaterial : {
						downloaded:false,
						downloading:true,
						error:null,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_approvalsPendingMaterial_REJECTED" : {
			state = {...state, 
					approvalsPendingMaterial : {
						downloaded:false,
						downloading:false,
						error: action.payload,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_approvalsPendingMaterial_FULFILLED" : {
			state = {...state, 
					approvalsPendingMaterial : {
						downloaded:true,
						downloading:false,
						error: null,
						data:action.payload.data
					}
				}
			break;
		}
		case "FETCHING_LIST_approvalsPendingPayment_PENDING" : {
			state = {...state, 
					approvalsPendingPayment : {
						downloaded:false,
						downloading:true,
						error:null,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_approvalsPendingPayment_REJECTED" : {
			state = {...state, 
					approvalsPendingPayment : {
						downloaded:false,
						downloading:false,
						error: action.payload,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_approvalsPendingPayment_FULFILLED" : {
			state = {...state, 
					approvalsPendingPayment : {
						downloaded:true,
						downloading:false,
						error: null,
						data:action.payload.data
					}
				}
			break;
		}
		case "FETCHING_LIST_approvalsInboxPayment_PENDING" : {
			state = {...state, 
					approvalsInboxPayment : {
						downloaded:false,
						downloading:true,
						error:null,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_approvalsInboxPayment_REJECTED" : {
			state = {...state, 
					approvalsInboxPayment : {
						downloaded:false,
						downloading:false,
						error: action.payload,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_approvalsInboxPayment_FULFILLED" : {
			state = {...state, 
					approvalsInboxPayment : {
						downloaded:true,
						downloading:false,
						error: null,
						data:action.payload.data
					}
				}
			break;
		}
		case "FETCHING_LIST_approvalsInboxMaterial_PENDING" : {
			state = {...state, 
					approvalsInboxMaterial : {
						downloaded:false,
						downloading:true,
						error:null,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_approvalsInboxMaterial_REJECTED" : {
			state = {...state, 
					approvalsInboxMaterial : {
						downloaded:false,
						downloading:false,
						error: action.payload,
						data:null
					}
				}
			break;
		}
		case "FETCHING_LIST_approvalsInboxMaterial_FULFILLED" : {
			state = {...state, 
					approvalsInboxMaterial : {
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