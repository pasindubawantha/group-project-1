import React from "react"
import { connect } from "react-redux"
@connect((store) => {
	return {//props
		apps: store.apps
	}
},)
export default class PageView extends React.Component {
	render() {
		return (<div> page </div>)
	}
}