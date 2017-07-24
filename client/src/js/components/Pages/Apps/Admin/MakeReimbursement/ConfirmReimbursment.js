import React from "react"
import { connect } from "react-redux"

@connect((store) => {
	return {//props
		url: store.url
	}
},)
export default class ConfirmReimbursment extends React.Component {
	render() {
		return  (<h1>ConfirmReimbursment</h1>)
	}
}