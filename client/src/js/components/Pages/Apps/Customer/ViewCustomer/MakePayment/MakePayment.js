import React from "react"
import { connect } from "react-redux"
import List from "../../../../Components/List"
import axios from 'axios'
import { downloadList } from '../../../../../../actions/stateActions'
import { NotificationManager } from 'react-notifications'
import ConfirmMakePayment from './ConfirmMakePayment'

@connect((store) => {
	return {//props
		url: store.url,
		customerId: store.apps.Customer.tabs.ViewCustomer.customer.data.id,
		projectList: store.state.list
	}
},)
export default class MakePayment extends React.Component {
	componentWillMount(){
		if(this.props.url[3] == null){
			this.state ={...this.props}
			this.props.dispatch(downloadList('/customers/'+this.state.customerId+'/projects/'))
		}
	}

	makeProjectList(list){
		var fields = {
			key:"id",
			id:"id",
			label:["name","id"],
			search:["name"]
		}
		var headers = {
			show:"Pick Project"
		}
		var nextURL = this.props.url.concat({ name: "Confirm Payment", viewID: "CustomerConfirmMakePayment"})
		return (<List nextURL={nextURL} listID={this.props.url[this.props.url.length-1].viewID} listAll={list} fields={fields} headers={headers} />)
	}
	render(){
		if(this.props.url[3] == null){
			var { projectList } = this.props
			if(projectList.downloaded){
				return this.makeProjectList(projectList.all)
			}else if(projectList.downloading){
				return (<p>loading</p>)
			}else if(projectList.error != null){
				return (<p> error </p>)
				NotificationManager.error("can't get projects for this customer")
			}else{
				return (<p> waiting </p>)
			}
		}else{
			return (<ConfirmMakePayment customerId={this.state.customerId}/>)
		}
		
	}
}