const defaulSate = {
	vendors: []
	}

export default function(state=defaulSate, action){
	switch(action.type){
		case "CUSTOMER_CUSTOMERVIEW_GET_PENDING" : {
			state = {...state, 
				Customer: {...state.Customer,
					tabs:{...state.Customer.tabs,
						ViewCustomer:{...state.Customer.tabs.ViewCustomer,
							customer:{...state.Customer.tabs.ViewCustomer.customer,
								"downloaded":false,
                        		"downloading":true,
                        		"downloadError":null,
								}
							}
						}
					} 
				}
			break;
		}
		case "CUSTOMER_CUSTOMERVIEW_GET_REJECTED" : {
			state = {...state, 
				Customer: {...state.Customer,
					tabs:{...state.Customer.tabs,
						ViewCustomer:{...state.Customer.tabs.ViewCustomer,
							customer:{...state.Customer.tabs.ViewCustomer.customer,
								"downloaded":false,
                        		"downloading":false,
                        		"downloadError":action.payload,
                        		"data":null
								}
							}
						}
					} 
				}
			break;
		}
		case "CUSTOMER_CUSTOMERVIEW_GET_FULFILLED" : {
			state = {...state, 
				Customer: {...state.Customer,
					tabs:{...state.Customer.tabs,
						ViewCustomer:{...state.Customer.tabs.ViewCustomer,
							customer:{...state.Customer.tabs.ViewCustomer.customer,
								"downloaded":true,
                        		"downloading":false,
                        		"downloadError":null,
                        		"data":action.payload.data[0]
								}
							}
						}
					} 
				}
			break;
		}
		case "VENDOR_VENDORVIEW_GET_PENDING" : {
			state = {...state, 
				Vendor: {...state.Vendor,
					tabs:{...state.Vendor.tabs,
						ViewVendor:{...state.Vendor.tabs.ViewVendor,
							vendor:{...state.Vendor.tabs.ViewVendor.vendor,
								"downloaded":false,
                        		"downloading":true,
                        		"downloadError":null,
								}
							}
						}
					} 
				}
			break;
		}
		case "VENDOR_VENDORVIEW_GET_REJECTED" : {
			state = {...state, 
				Vendor: {...state.Vendor,
					tabs:{...state.Vendor.tabs,
						ViewVendor:{...state.Vendor.tabs.ViewVendor,
							vendor:{...state.Vendor.tabs.ViewVendor.vendor,
								"downloaded":false,
                        		"downloading":false,
                        		"downloadError":action.payload,
                        		"data":null
								}
							}
						}
					} 
				}
			break;
		}
		case "VENDOR_VENDORVIEW_GET_FULFILLED" : {
			state = {...state, 
				Vendor: {...state.Vendor,
					tabs:{...state.Vendor.tabs,
						ViewVendor:{...state.Vendor.tabs.ViewVendor,
							vendor:{...state.Vendor.tabs.ViewVendor.vendor,
								"downloaded":true,
                        		"downloading":false,
                        		"downloadError":null,
                        		"data":action.payload.data[0]
								}
							}
						}
					} 
				}
			break;
		}
	}
	return state;
};