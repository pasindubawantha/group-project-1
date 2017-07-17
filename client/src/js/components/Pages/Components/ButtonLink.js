import React from "react"
import { connect } from "react-redux"

import {goTo} from"../../../actions/urlActions.js"
@connect((store) => {
	return {//props
		dummy: store.dummy
	}
},)
export default class Link extends React.Component {
	onClickDo(){
		this.props.onClick()
		this.props.dispatch(goTo(this.props.url))
	}

	render() {
		return (<a class="btn btn-primary active" role="button" onClick={this.onClickDo.bind(this)} >{this.props.name}</a>)
	}
}