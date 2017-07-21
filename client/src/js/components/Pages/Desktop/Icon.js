import React from "react"
import { connect } from "react-redux"
import {goTo} from"../../../actions/urlActions.js"

@connect((store) => {
	return {//props
		dummy: store.dummy
		
	}
},)
export default class Icon extends React.Component {
	onClickDo(){
		if(this.props.onClick != null){
			this.props.onClick()
		}
		this.props.dispatch(goTo(this.props.url))
	}

	render() {
		return (
			<div class="col-xs-6 col-md-2">
				<a onClick={this.onClickDo.bind(this)} class="thumbnail" >
					<img src={this.props.img.src} alt={this.props.name} />
					<div class="caption">
					<h3>{this.props.name}</h3>
					</div>
				</a>
			</div>
		)
	}
}