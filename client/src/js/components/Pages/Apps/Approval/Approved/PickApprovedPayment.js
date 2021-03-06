//import laibarys
import React from "react"
import { connect } from "react-redux"
import List from "../../../Components/List"
import { fetchApprovalList } from "../../../../../actions/listsActions"

//connect to stapore object
@connect((store) => {
	return {//props
		url: store.url,
		list: store.lists.approvalsApprovedPayment,
		userId: store.user.userEmployeeId
	}
},)
//class for pickvinores
export default class PickApprovedPayment extends React.Component {
	componentWillMount(){
		this.props.dispatch(fetchApprovalList('approvalsApprovedPayment', 'approved/payment/' + this.props.userId))
	}
	render(){
		var { list } = this.props
		if(list.downloaded){
			var fields = {
				key:"transactionId",
				id:"transactionId",
				label:["projectName","stageName","projectAddress","itemName","ammount","createdDate","approvedDate"],
				search:["itemName","projectName","createdDate"]
			}
			var headers = {
				show:"Approved Payment"
			}
			var nextURL = this.props.url.slice(0, this.props.url.length - 1).concat({ name: "View Approved Request", viewID: "ApprovalViewApprovedPayment"})
			return (
				<div class="panel panel-default">
					<div class="panel-body">
						<List nextURL={nextURL} listID={this.props.url[this.props.url.length-1].viewID} listAll={this.props.list.data} fields={fields} headers={headers} />
					</div>
				</div>)
		} else if(list.downloading){
			return (<h2>Downloading</h2>)
		} else {
			return (<h2>Error</h2>)
		}
	}
}