import React from "react"
import { connect } from "react-redux"
import { updateListPicked } from "../../../actions/stateActions"

import {goTo} from"../../../actions/urlActions.js"
@connect((store) => {
	return {//props
		dummy: store.dummy
	}
},)
export default class ListItem extends React.Component {
	onClickDo(){
		if(this.props.onClick != null){
			this.props.onClick()
		}
		this.props.dispatch(updateListPicked(this.props.listID,this.props.item[this.props.id]))
		this.props.dispatch(goTo(this.props.url))
	}

	render() {
		return (
			<a class="list-group-item" onClick={this.onClickDo.bind(this)} >
				<ul class="list-group">
				<li class="list-group-item"> <h4 class="list-group-item-heading">{this.props.heading}</h4> </li>
				{this.props.textFields.map(
					field => (<li key={field} class="list-group-item"><span class="label label-default"> {field} </span> &nbsp; &nbsp;{ this.props.item[field] }</li>)
					)
				}
				</ul>
			</a>)
	}
}