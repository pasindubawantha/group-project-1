import React from "react"
import { connect } from "react-redux"
import { NotificationManager } from 'react-notifications';
import axios from "axios"

@connect((store) => {
	return {//props
		url: store.url,
		projectId: store.state.list.picked['CustomerMakePayment']
	}
},)
export default class ConfirmPayment extends React.Component {
	componentWillMount(){
		this.state = {
			customerId: this.props.customerId,
			projectId: this.props.projectId,
			ammount: 0,
			description:"none",
			ammountValidated : false
		}
	}
	confirm(e){
		e.target.disabled = true
		axios.post('/customerPayments/',this.state)
		.then(function(response){
			NotificationManager.info('Transaction sucessfully made')
		})
		.catch(function(error){
			NotificationManager.error('Unable to make transaction')
		})
	}
	changeAmmount(e){
		if(e.target.value != "" && e.target.value != null && parseInt(e.target.value) != 0){
			this.setState({ ammount: e.target.value })
			this.setState({ ammountValidated: true })
		}else{
			this.setState({ ammountValidated: false })
		}
	}
	changeDescription(e){
		this.state.description = e.target.value
	}

	render() {
		return  (
			<form class="form-horizontal">
			  	<div class="form-group">
					<label class="col-sm-3 control-label">Customer ID : </label>
					<label class="col-sm-7 control-label">{this.props.customerId}</label>
	    		</div>
	    		<div class="form-group">
					<label class="col-sm-3 control-label">Project ID : </label>
					<label class="col-sm-7 control-label">{this.props.projectId}</label>
	    		</div>
	    	<div class="form-group">
				    <label for="inputAmmount" class="col-sm-2 control-label">Description</label>
				    <div class="col-sm-7">
				      <input onChange={this.changeDescription.bind(this)} type="text" class="form-control" id="inputPassword3" placeholder="description"/>
				    </div>
				  </div>	
			  <div class="form-group">
			    <label for="inputAmmount" class="col-sm-2 control-label">Ammount</label>
			    <div class="col-sm-7">
			     <div class="input-group">
			    	<span class="input-group-addon">Rs</span>
			      <input onChange={this.changeAmmount.bind(this)} type="number" class="form-control"  placeholder="Ammount"/>
			      <span class="input-group-addon">.00</span>
			      </div>
			    </div>
			  </div>
			  <div class="form-group">
			    <div class="col-sm-offset-2 col-sm-7">
					<button onClick={this.confirm.bind(this)} disabled={!this.state.ammountValidated } type="button" class="btn btn-warning">Confirm</button>
			  	</div>
			  </div>
			</form>
		)
	}
}