import React from "react"
import { connect } from "react-redux"
import PickList from "../../../Components/PickList"

@connect((store) => {
	return {//props
		url: store.url,
		team: store.state.list.selected,
		data: store.state.form.data
	}
},)
export default class ConfirmNewProject extends React.Component {
	render(){
		console.log(this.props.team)
		console.log(this.props.data)
		return (<div>
			a
			</div>)
	}
}