import React from "react"
import { connect } from "react-redux"
import PickList from "../../../Components/PickList"

@connect((store) => {
	return {//props
		url: store.url,
		employeeList: store.lists.employee.data
	}
},)
export default class PickCustomer extends React.Component {
	render(){
		var fields = {
			key:"customerID",
			id:"customerID",
			label:["name","customerID"],
			search:["name"]
		}
		var headers = {
			selected:"Selected Employees",
			show:"Pick Employees"
		}
		var returnButton= {url: this.props.url.concat({ name:"Confirm New Project", viewID: "CustomerNewProjectConfirmNewProject"}), name:"Confirm"}
		return (<PickList returnButton={returnButton} listID={this.props.url[this.props.url.length-1].viewID} listAll={this.props.employeeList} fields={fields} headers={headers} />)
	}
}