import React from "react"
import { connect } from "react-redux"
import PickList from "../../Components/PickList"

@connect((store) => {
	return {//props
		url: store.url,
		tab: store.apps.Customer.tabs.PickCustomer
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
		return (<PickList viewID={this.props.url[this.props.url.length-1].viewID} listAll={this.props.tab.state.listAll} fields={fields} headers={headers} />)
	}
}