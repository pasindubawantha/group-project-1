import React from "react"
import AdminApp from "./Admin/AdminApp"
import CustomerApp from "./Customer/CustomerApp"
import EmployeeApp from "./Employee/EmployeeApp"
import ProjectApp from "./Project/ProjectApp"
import ReverseApp from "./Reverse/ReverseApp"
import VendorApp from "./Vendor/VendorApp"
import ApprovalApp from "./Approval/ApprovalApp"

export default class App extends React.Component {
	render() {
		switch(this.props.appID){
			case "Admin" : {return  (<AdminApp />)}
			case "Customer" : {return (<CustomerApp />)}
			case "Employee" : {return (<EmployeeApp />)}
			case "Project" : {return (<ProjectApp />)}
			case "Reverse" : {return (<ReverseApp />)}
			case "Vendor" : {return (<VendorApp />)}
			case "Approval" : {return (<ApprovalApp />)}
		}
	}
}