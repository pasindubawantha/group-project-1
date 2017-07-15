import React from "react"
import AdminApp from "./Apps/Admin/AdminApp"
import CustomerApp from "./Apps/Customer/CustomerApp"

export default class App extends React.Component {
	render() {
		return  (<CustomerApp />)
	}
}