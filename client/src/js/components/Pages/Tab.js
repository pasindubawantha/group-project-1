import React from "react"
import { connect } from "react-redux"
import MakePayments from "./Tabs/Admin/MakePayments"
import NewCustomer from "./Tabs/Customer/NewCustomer"
@connect((store) => {
	return {//props
		apps: store.apps
	}
},)
export default class Tab extends React.Component {
	render() {
		return (<NewCustomer />)
	}
}