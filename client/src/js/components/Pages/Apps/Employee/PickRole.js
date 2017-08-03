import React from "react"
import { connect } from "react-redux"
import List from "../../Components/List"

@connect((store) => {
	return {//props
		url: store.url,
		roleList: store.lists.roles.data
	}
},)
export default class PickRole extends React.Component {
	render(){
		var fields = {
			key:"id",
			id:"id",
			label:["name","id","description"],
			search:["name","description"]
		}
		var headers = {
			show:"Pick Role"
		}
		var nextURL = this.props.url.concat({ name: "Confirm Employee Details", viewID: "EmployeeNewEmployeeConfirmEmployee"})
		return (<List nextURL={nextURL} listID={this.props.url[this.props.url.length-1].viewID} listAll={this.props.roleList} fields={fields} headers={headers} />)
	}
}