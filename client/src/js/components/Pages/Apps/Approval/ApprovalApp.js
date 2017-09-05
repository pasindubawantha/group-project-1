//import libariys
import React from "react"
import { connect } from "react-redux"
import SideMenu from "../../Components/SideMenu.js"
import PickApproved from "./Approved/PickApproved"
import PickDenied from "./Denied/PickDenied"
import PickInbox from "./Inbox/PickInbox"
import PickPending from "./Pending/PickPending"
//connect to store object
@connect((store) => {
	return {//props
		url: store.url,
		app: store.apps.Approval
	}
},)
//class creat a cusotmerapp 
export default class ApprovalApp extends React.Component {
	//creat a tabs
	getTab(){
		if(this.props.url[2] == null){
			return (<div class="panel panel-default">
				  <div class="panel-body">
				    <div class="jumbotron">
					  <h1>&nbsp;Welcome to Approval App</h1>
					  <p> &nbsp; &nbsp; Manage Your Approvals here</p>
					  <p>&nbsp; &nbsp; <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
					</div>
				  </div>
				</div>)
		}
	// tabs views
		var tabViewID = this.props.url[2].viewID
		switch(tabViewID){
	//inbox to be approved requesrs all tab
			case "ApprovalInboxAll":{
				return(<PickInbox />)
				break	
			}
	//Approved requests tab
			case "ApprovalApprovedAll":{
				return(<PickApproved />)
				break
			}
	//Pending requests tab		
			case "ApprovalPendingAll":{
				return(<PickPending />)
				break
			}
	//Denied requests tab		
			case "ApprovalDeniedAll":{
				return(<PickDenied />)
				break
			}
	//not select any tab go to homepage of customer		
			default : {
				return <h2> Welcome to Customer App </h2>
			}
		}
	}
	//to get side menu
	getSideMenue(){
		var url = [{name:"Home" ,viewID:"Home"},{name:this.props.app.name ,viewID:"Approval"}]
		return(<SideMenu menuItems={this.props.app.menuItems} name={this.props.app.name} concatURL={url} />)
		
	}
	//this is a render method.call to getsidemeu and gettab
	render() {
		return  (
			<div class="row">
			  <div class="col-md-3">
			  {this.getSideMenue()}
			  </div>
			  <div class="col-md-9">
			  {this.getTab()}
			  </div>
			</div>
			)
	}
}