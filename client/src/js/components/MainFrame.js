import React from "react"
import { connect } from "react-redux"

import NevigationBar from "./NevigationBar/NevigationBar.js"
import BreadCrumb from "./BreadCrumb"
import ContentArea from "./ContentArea"
import Login from "./Pages/Login/Login"
import { NotificationContainer } from 'react-notifications';


@connect((store) => {
	return {//props
		user: store.user
	}
},)
export default class MainFrame extends React.Component {
	render() {
		console.log(3)
		if(this.props.user.sessionID == null){
			return (<Login />)
		}else{
			return(
			      <div>
			      	<NotificationContainer />
			      	<NevigationBar />
			      	<BreadCrumb />
			        <ContentArea />
			        <div> asdguahdfgiuhadifhgaidfjigadjoi</div>
			      </div>
				)
		}
	}
}