import React from "react"
import { connect } from "react-redux"
import ButtonLink from "../../../Components/ButtonLink"
import { NotificationManager } from 'react-notifications';
import PickRole from '../PickRole'
import ConfirmEmployee from '../ConfirmEmployee'
import { updateFormData } from '../../../../../actions/stateActions'
import { axiosInjector } from '../../../../customFunctions' 
import { fetchList } from "../../../../../actions/listsActions"

@connect((store) => {
	return {//props
		url: store.url,
		employee: store.apps.Employee.tabs.ViewEmployee.employee
	}
},)
export default class EditEmployee extends React.Component {
	componentWillMount(){
		var { employee } = this.props
		this.employee = {
			id:employee.id,
			name: employee.employeeName,
			address: employee.address,
			salaray: employee.salaray,
			designation: employee.designation,
			roleId: employee.roleId,
			active: true
		}
	}
	confirm(e){
		this.props.dispatch(updateFormData(this.state))
	}
	changeName(e){
		this.state.name = e.target.value
	}
	changeAddress(e){
		this.state.Address = e.target.value
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
	save(e){
		axiosInjector('/employees/'+ this.employee.id +'/', 'post', this.employee,this)
			.then(function(response){
				response.this.props.dispatch(fetchList('employees'))
				NotificationManager.info('Sucessfully updated employee details')
			}, function(error){
				NotificationManager.error('Unable to update employee')
			})
	}
	delete(e){
		e.target.disabled = true
		this.employee.active = false
		axiosInjector('/employees/'+ this.employee.id +'/', 'post', this.employee,this)
			.then(function(response){
				response.this.props.dispatch(fetchList('employees'))
				NotificationManager.info('Sucessfully deleted employee details')
			}, function(error){
				NotificationManager.error('Unable to delete employee')
			})
	}
	render() {
		if(this.props.url[3] == null){
			return  (
				<form class="form-horizontal">
				  <div class="form-group">
				    <label class="col-sm-2 control-label">Name</label>
				    <div class="col-sm-7">
				      <input onChange={this.changeName.bind(this)} type="text" class="form-control" placeholder={this.employee.name}/>
				    </div>
				  </div>
				  <div class="form-group">
				    <label class="col-sm-2 control-label">Address</label>
				    <div class="col-sm-7">
				      <input onChange={this.changeAddress.bind(this)} type="text" class="form-control" placeholder={this.employee.address}/>
				    </div>
				  </div>
				  <div class="form-group">
				    <label class="col-sm-2 control-label">Designation</label>
				    <div class="col-sm-7">
				      <input onChange={this.changeDesignation.bind(this)} type="text" class="form-control" placeholder={this.employee.designation}/>
				    </div>
				  </div>
				  <div class="form-group">
			    <label for="inputAmmount" class="col-sm-2 control-label">Salary</label>
			    <div class="col-sm-7">
			     <div class="input-group">
			    	<span class="input-group-addon">Rs</span>
			      <input onChange={this.changeSalary.bind(this)} type="number" class="form-control"  placeholder={this.employee.salaray}/>
			      <span class="input-group-addon">.00</span>
			      </div>
			    </div>
			  </div>
				  <div class="form-group">
				    <div class="col-sm-offset-2 col-sm-7">
				    	<button onClick={this.save.bind(this)} type="button" class="btn btn-warning">Save</button>
				    	<ButtonLink url={this.props.url.concat({name:'Pick Role ', viewID:'EmployeeEditEmployeePickRole'})} name="Pick Role" onClick={this.confirm.bind(this)}/>
				    	<button onClick={this.delete.bind(this)} type="button" class="btn btn-danger">Delete</button>
				  	</div>
				  </div>
				</form>
			)
		}else{
			switch(this.props.url[3].viewID){
				case 'EmployeeEditEmployeePickRole': { return(<PickRole />)
							break }
				case 'EmployeeEditEmployeeConfirmEmployee': { return(<ConfirmEmployee />)
							break }
			}
		}
	}
}