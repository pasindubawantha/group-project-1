//import liabarys
import React from "react"
import { connect } from "react-redux"
import PickList from "../../../Components/PickList"
//connect to storeobject
@connect((store) => {
	return {//props
		url: store.url,
		employeeList: store.lists.employees.data
	}
},)
//class pickteam
export default class PickTeam extends React.Component {
	render(){
		var fields = {
			key:"id",
			id:"id",
			label:["name","id","designation"],
			search:["name","designation"]
		}
		var headers = {
			selected:"Selected Employees",
			show:"Pick Employees"
		}
		var returnButton= {url: this.props.url.concat({ name:"Confirm New Project", viewID: "CustomerNewProjectConfirmNewProject"}), name:"Confirm"}
		return (<PickList returnButton={returnButton} listID={this.props.url[this.props.url.length-1].viewID} listAll={this.props.employeeList} fields={fields} headers={headers} />)
	}
}