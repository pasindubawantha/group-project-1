import React from "react"
import { connect } from "react-redux"
import List from "../../Components/List"

@connect((store) => {
	return {//props
		url: store.url,
		customersList: store.lists.customer.data
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
			show:"Pick Customer"
		}
		var nextURL = this.props.url.slice(0, this.props.url.length - 1).concat({ name: "Customer View", viewID: "CustomerViewCustomer"})
		return (<List nextURL={nextURL} listID={this.props.url[this.props.url.length-1].viewID} listAll={this.props.customersList} fields={fields} headers={headers} />)
	}
}