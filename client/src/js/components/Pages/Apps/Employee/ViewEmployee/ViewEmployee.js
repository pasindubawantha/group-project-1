import React from "react"
import { connect } from "react-redux"
import { NotificationManager } from 'react-notifications';
import { getEmployeeDetails } from '../../../../../actions/Apps/employeeActions'

@connect((store) => {
	return {//props
		url: store.url,
		employeeId: store.state.list.picked['EmployeeAll'],
		employee: store.apps.Employee.tabs.ViewEmployee.employee
	}
},)
export default class ViewEmployee extends React.Component {
	componentWillMount(){
		this.props.dispatch(getEmployeeDetails(this.props.employeeId))
		this.state = {warrned: false}
	}
	warn(){
		NotificationManager.warning('Cannot get employee data')
	}

	render() {
		var { employeeId, employee, url } = this.props
			if(employee.downloaded){
				return  (
					<form class="form-horizontal">
						<div class="form-group">
	    					<label class="col-sm-3 control-label">Name : </label>
	    					<label class="col-sm-7 control-label">{employee.data.name}</label>
	    				</div>
	    				<div class="form-group">
	    					<label class="col-sm-3 control-label">Address : </label>
	    					<label class="col-sm-7 control-label">{employee.data.address}</label>
	    				</div>
	    				<div class="form-group">
	    					<label class="col-sm-3 control-label">Salary : </label>
	    					<label class="col-sm-7 control-label">{employee.data.salary}</label>
	    				</div>
	    				<div class="form-group">
	    					<label class="col-sm-3 control-label">Designation : </label>
	    					<label class="col-sm-7 control-label">{employee.data.designation}</label>
	    				</div>
	    				<div class="form-group">
	    					<label class="col-sm-3 control-label">Role ID : </label>
	    					<label class="col-sm-7 control-label">{employee.data.roleId}</label>
	    				</div>
					</form>
				)
			}else{
				if(employee.downloadError != null){
					if(!this.state.warrned){
						this.warn()
						this.state.warrned = true
					}
					return <p> error </p>
				}
				return (<p>loading</p>)
			}
	}
}