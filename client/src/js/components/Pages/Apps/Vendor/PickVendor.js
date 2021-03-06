//import laibarys
import React from "react"
import { connect } from "react-redux"
import List from "../../Components/List"
//connect to stapore object
@connect((store) => {
	return {//props
		url: store.url,
		vendorsList: store.lists.vendors.data
	}
},)
//class for pickvinores
export default class PickVendor extends React.Component {
	render(){
		var fields = {
			key:"id",
			id:"id",
			label:["name","id","type"],
			search:["name"]
		}
		var headers = {
			show:"Pick Vendor"
		}
		var nextURL = this.props.url.slice(0, this.props.url.length - 1).concat({ name: "Vendor View", viewID: "VendorViewVendor"})
		return (<List nextURL={nextURL} listID={this.props.url[this.props.url.length-1].viewID} listAll={this.props.vendorsList} fields={fields} headers={headers} />)
	}
}