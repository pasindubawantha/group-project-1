import React from "react"
import { connect } from "react-redux"
import ButtonLink from "../../Components/ButtonLink"
import { NotificationManager } from 'react-notifications';
import PickRole from './PickRole'
import ConfirmEmployee from './ConfirmEmployee'
import { updateFormData } from '../../../../actions/stateActions' 

@connect((store) => {
	return {//props
		url: store.url
	}
},)
export default class NewEmployee extends React.Component {
	componentWillMount(){

		this.state = {
			employeeName: null,
			address: null,
			salary: null,
			designation: null,
			roleId:null,
			active: true
		}
	}
	changeName(e){
		this.state.employeeName = e.target.value
	}
	changeAddress(e){
		this.state.address = e.target.value
	}
	changeSalary(e){
		this.state.salary = e.target.value
	}
	changeDesignation(e){
		this.state.designation = e.target.value
	}
	confirm(e){
		this.props.dispatch(updateFormData(this.state))
	}
	render() {
		if(this.props.url[3] == null){
			return  (
				<form class="form-horizontal">
				  <div class="form-group">
				    <label class="col-sm-2 control-label">Name</label>
				    <div class="col-sm-7">
				      <input onChange={this.changeName.bind(this)} type="text" class="form-control" placeholder="Name"/>
				    </div>
				  </div>
				  <div class="form-group">
				    <label class="col-sm-2 control-label">Address</label>
				    <div class="col-sm-7">
				      <input onChange={this.changeAddress.bind(this)} type="text" class="form-control" placeholder="Address"/>
				    </div>
				  </div>
				  <div class="form-group">
				    <label class="col-sm-2 control-label">Designation</label>
				    <div class="col-sm-7">
				      <input onChange={this.changeDesignation.bind(this)} type="text" class="form-control" placeholder="Desigation"/>
				    </div>
				  </div>
				  <div class="form-group">
			    <label for="inputAmmount" class="col-sm-2 control-label">Salary</label>
			    <div class="col-sm-7">
			     <div class="input-group">
			    	<span class="input-group-addon">Rs</span>
			      <input onChange={this.changeSalary.bind(this)} type="number" class="form-control"  placeholder="Salary"/>
			      <span class="input-group-addon">.00</span>
			      </div>
			    </div>
			  </div>
				  <div class="form-group">
				    <div class="col-sm-offset-2 col-sm-7">
				    	<ButtonLink url={this.props.url.concat({name:'Pick Role ', viewID:'EmployeeNewEmployeePickRole'})} name="Pick Role" onClick={this.confirm.bind(this)}/>
				  	</div>
				  </div>
				</form>
			)
		}else{
			if(this.props.url[4] == null ){
				return(<PickRole />)
			}else{
				return(<ConfirmEmployee />)
			}
		}
	}
}