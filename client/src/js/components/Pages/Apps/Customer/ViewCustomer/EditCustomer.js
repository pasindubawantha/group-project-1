import React from "react"
import { connect } from "react-redux"
import ButtonLink from "../../../Components/ButtonLink"
import { NotificationManager } from 'react-notifications'
import NewProject from '../NewProject/NewProject'
import { axiosInjector } from '../../../../customFunctions'
import { fetchList } from "../../../../../actions/listsActions"

@connect((store) => {
	return {//props
		url: store.url,
		customer: store.apps.Customer.tabs.ViewCustomer.customer
	}
},)
export default class EditCustomer extends React.Component {
	componentWillMount(){
		this.state = {
			customerId:this.props.customer.data.id,
			customerName:this.props.customer.data.name,
			customerAddress:this.props.customer.data.address
		}
	}
	confirm(e){
	}
	changeName(e){
		this.state.customerName = e.target.value
	}
	changeAddress(e){
		this.state.customerAddress = e.target.value
	}
	save(e){
		e.target.disabled = true
		var customer = {
			id: this.state.customerId,
			name: this.state.customerName,
			address : this.state.customerAddress 
		}
		axiosInjector('/customers/'+ customer.id + '/', 'post', customer, this)
		.then(function(response){
			response.this.props.dispatch(fetchList('customers'))
			NotificationManager.info('Sucessfully updated customer details')
		}, function(error){
			NotificationManager.error('Unable to update Customer')
		})
	}

	render() {
		if(this.props.url[3] == null){
			return  (
				<form class="form-horizontal">
				  <div class="form-group">
				    <label for="inputName" class="col-sm-2 control-label">Name</label>
				    <div class="col-sm-7">
				      <input onChange={this.changeName.bind(this)} type="text" class="form-control" id="inputEmail3" placeholder={this.props.customer.data.name}/>
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="inputAmmount" class="col-sm-2 control-label">Address</label>
				    <div class="col-sm-7">
				      <input onChange={this.changeAddress.bind(this)} type="address" class="form-control" id="inputPassword3" placeholder={this.props.customer.data.address}/>
				    </div>
				  </div>
				  <div class="form-group">
				    <div class="col-sm-offset-2 col-sm-7">
				    	<button onClick={this.save.bind(this)} type="button" class="btn btn-warning">Save</button>
				    	<ButtonLink url={this.props.url.concat({name:'New Project ', viewID:'CustomerEditCustomerNewProject'})} name="Create New Project" onClick={this.confirm.bind(this)}/>
				  	</div>
				  </div>
				</form>
			)
		}else{
			return(<NewProject customerData={this.state} />)
		}
	}
}