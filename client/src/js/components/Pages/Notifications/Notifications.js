import React from "react"
import { connect } from "react-redux"

@connect((store) => {
	return {//props
		url: store.url,
		appList: store.user.appList,
		apps: store.apps
	}
},)
export default class Notifications extends React.Component {
	render() {
		return(<h1>Not</h1>)
	}
}