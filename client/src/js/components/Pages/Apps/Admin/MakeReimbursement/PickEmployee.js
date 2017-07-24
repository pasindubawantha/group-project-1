import React from "react"
import { connect } from "react-redux"
import List from "../../../Components/List"

@connect((store) => {
	return {//props
		url: store.url,
		employeeList: store.lists.employee.data
	}
},)
export default class PickEmployee extends React.Component {
	render(){
		var fields = {
			key:"id",
			id:"id",
			label:["name","id","designation"],
			search:["name", "designation"]
		}
		var headers = {
			show:"Pick Employee"
		}
		var nextURL = this.props.url.concat({ name: "Pay Reimbursment", viewID: "AdminMakeReimbursementSelectReimbursment"})
		return (<List nextURL={nextURL} listID={this.props.url[this.props.url.length-1].viewID} listAll={this.props.employeeList} fields={fields} headers={headers} />)
	}
}