import React from "react"
import { connect } from "react-redux"
import PickEmployee from "./PickEmployee"
import SelectReimbursments from "./SelectReimbursments"
import ConfirmReimbursment from "./ConfirmReimbursment"

@connect((store) => {
	return {//props
		url: store.url,
	}
},)
export default class MakeReimbursement extends React.Component {
	render() {
		//dis[atch and get all employee reimbursments transactions data]
		var { url } = this.props
		if(url[4] != null){
			return (<ConfirmReimbursment />)
		}else if(url[3] != null){
			return (<SelectReimbursments />)
		}else{
			return <PickEmployee />
		}
	}
}