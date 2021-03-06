//import laibarys
import React from "react"
import { connect } from "react-redux"
import List from "../../Components/List"

//connect to the store object
@connect((store) => {
	return {//props
		url: store.url,
		customersList: store.lists.customers.data
	}
},)
//class for pickcustomer
export default class PickCustomer extends React.Component {
	render(){
		var fields = {
			key:"id",
			id:"id",
			label:["name","id"],
			search:["name"]
		}
		var headers = {
			show:"Pick Customer"
		}
		var nextURL = this.props.url.slice(0, this.props.url.length - 1).concat({ name: "Customer View", viewID: "CustomerViewCustomer"})
		return (<List nextURL={nextURL} listID={this.props.url[this.props.url.length-1].viewID} listAll={this.props.customersList} fields={fields} headers={headers} />)
	}
}