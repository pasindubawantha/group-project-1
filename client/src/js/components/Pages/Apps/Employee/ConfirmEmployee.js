import React from "react"
import { connect } from "react-redux"
import { NotificationManager } from 'react-notifications'
import { axiosInjector } from '../../../customFunctions'
import { fetchList } from "../../../../actions/listsActions"
@connect((store) => {
	return {//props
		url: store.url,
		roleId: store.state.list.picked['EmployeeNewEmployeePickRole'],
		employee: store.state.form.data
	}
},)
export default class ConfirmNewEmployee extends React.Component {
	componentWillMount(){
		var employee = Object.assign({}, this.props.employee)
		var roleId = this.props.roleId
		this.employee = {
			id:employee.id,
			name: employee.employeeName,
			address: employee.address,
			salary: employee.salary,
			designation: employee.designation,
			roleId: roleId,
			active: true
		}
		
		
	}

	save(e){
		e.target.disabled = true
		if(this.employee.id == null){
			axiosInjector('/employees/', 'post', this.employee, this)
			.then(function(response){
				response.this.props.dispatch(fetchList('employees'))
				NotificationManager.info('Sucessfully added new Employee')
			}, function(error){
				NotificationManager.error('Unable to create new Employee')
			})
		}else{
			axiosInjector('/employees/'+this.employee.id+'/', 'post', this.employee, this)
			.then(function(response){
				response.this.props.dispatch(fetchList('employees'))
				NotificationManager.info('Sucessfully upldaded Employee')
			}, function(error){
				NotificationManager.error('Unable to update Employee')
			})
		}
	}
	render(){
		return (
			<form class="form-horizontal">
				<div class="form-group">
					<label class="col-sm-3 control-label">Employee Name : </label>
					<label class="col-sm-7 control-label">{this.props.employee.employeeName}</label>
	    		</div>	
				<div class="form-group">
					<label class="col-sm-3 control-label">Employee Address : </label>
					<label class="col-sm-7 control-label">{this.props.employee.address}</label>
				</div>
				<div class="form-group">
					<label class="col-sm-3 control-label">Salary : </label>
					<label class="col-sm-7 control-label">{this.props.employee.salary}</label>
	    		</div>	
				<div class="form-group">
					<label class="col-sm-3 control-label">Designation : </label>
					<label class="col-sm-7 control-label">{this.props.employee.designation}</label>
				</div>
				<div class="form-group">
					<label class="col-sm-3 control-label">Role ID : </label>
					<label class="col-sm-7 control-label">{this.props.roleId}</label>
	    		</div>	
				<div class="form-group">
				    <div class="col-sm-offset-2 col-sm-7">
						<button onClick={this.save.bind(this)} type="button" class="btn btn-warning">Save</button>
					</div>
				</div>
			</form>
		)
	}
}