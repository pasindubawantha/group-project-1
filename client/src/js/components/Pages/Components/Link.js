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
		if(this.props.onClick != null){
			this.props.onClick()
		}
		this.props.dispatch(goTo(this.props.url))
	}

	render() {
		return (<a onClick={this.onClickDo.bind(this)} >{this.props.name}</a>)
	}
}