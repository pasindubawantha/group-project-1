import React from "react"
import { connect } from "react-redux"
import ButtonLink from "../../Components/ButtonLink"
import { NotificationManager } from 'react-notifications';
import NewProject from './NewProject/NewProject'

@connect((store) => {
	return {//props
		url: store.url
	}
},)
export default class NewCustomer extends React.Component {
	constructor(){
		super()
		this.state = {
			customerName:"",
			customerAddress:""
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

	render() {
		if(this.props.url[3] == null){
			return  (
				<form class="form-horizontal">
				  <div class="form-group">
				    <label for="inputName" class="col-sm-2 control-label">Name</label>
				    <div class="col-sm-7">
				      <input onChange={this.changeName.bind(this)} type="text" class="form-control" id="inputEmail3" placeholder="Name"/>
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="inputAmmount" class="col-sm-2 control-label">Address</label>
				    <div class="col-sm-7">
				      <input onChange={this.changeAddress.bind(this)} type="address" class="form-control" id="inputPassword3" placeholder="Address"/>
				    </div>
				  </div>
				  <div class="form-group">
				    <div class="col-sm-offset-2 col-sm-7">
				    	<ButtonLink url={this.props.url.concat({name:'New Project ', viewID:'CustomerNewCustomerNewProject'})} name="Create Project" onClick={this.confirm.bind(this)}/>
				  	</div>
				  </div>
				</form>
			)
		}else{
			return(<NewProject customerData={this.state} />)
		}
	}
}