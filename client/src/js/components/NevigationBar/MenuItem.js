import React from "react"
import { connect } from "react-redux"

import {goTo} from"../../actions/urlActions.js"
@connect((store) => {
	return {//props
		gloabalUrl: store.url
	}
},)
export default class MenuItem extends React.Component {
	onClickDo(){
		if(this.props.onClick != null){
			this.props.onClick()
		}
		this.props.dispatch(goTo(this.props.url))
	}

	render() {
		if(this.props.url.length == this.props.gloabalUrl.length && this.props.url[0].viewID == this.props.gloabalUrl[0].viewID){
			return (<li class="active"><a onClick={this.onClickDo.bind(this)}>{this.props.name}</a></li>)
		}else{
			return (<li><a onClick={this.onClickDo.bind(this)}>{this.props.name}</a></li>)
		}
	}
}