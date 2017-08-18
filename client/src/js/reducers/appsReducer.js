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
		case "EMPLOYEE_EMPLOYEEVIEW_GET_PENDING" : {
			state = {...state, 
				Employee: {...state.Employee,
					tabs:{...state.Employee.tabs,
						ViewEmployee:{...state.Employee.tabs.ViewEmployee,
							employee:{...state.Employee.tabs.ViewEmployee.employee,
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
		case "EMPLOYEE_EMPLOYEEVIEW_GET_REJECTED" : {
			state = {...state, 
				Employee: {...state.Employee,
					tabs:{...state.Employee.tabs,
						ViewEmployee:{...state.Employee.tabs.ViewEmployee,
							employee:{...state.Employee.tabs.ViewEmployee.employee,
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
		case "EMPLOYEE_EMPLOYEEVIEW_GET_FULFILLED" : {
			state = {...state, 
				Employee: {...state.Employee,
					tabs:{...state.Employee.tabs,
						ViewEmployee:{...state.Employee.tabs.ViewEmployee,
							employee:{...state.Employee.tabs.ViewEmployee.employee,
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
        case "PROJECT_PROJECTVIEW_GET_PENDING" : {
            state = {...state,
                Project: {...state.Project,
                    tabs:{...state.Project.tabs,
                        ViewProject:{...state.Project.tabs.ViewProject,
                            project:{...state.Project.tabs.ViewProject.project,
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
        case "PROJECT_PROJECTVIEW_GET_REJECTED" : {
            state = {...state,
                Project: {...state.Project,
                    tabs:{...state.Project.tabs,
                        ViewProject:{...state.Project.tabs.ViewProject,
                            project:{...state.Project.tabs.ViewProject.project,
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
        case "PROJECT_PROJECTVIEW_GET_FULFILLED" : {
            state = {...state,
                Project: {...state.Project,
                    tabs:{...state.Project.tabs,
                        ViewProject:{...state.Project.tabs.ViewProject,
                            project:{...state.Project.tabs.ViewProject.project,
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