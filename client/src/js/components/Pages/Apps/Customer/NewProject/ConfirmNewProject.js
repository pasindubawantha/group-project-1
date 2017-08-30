//import laibary
import React from "react"
import { connect } from "react-redux"
import { NotificationManager } from 'react-notifications'
import { axiosInjector } from '../../../../customFunctions'
import { fetchList } from "../../../../../actions/listsActions"
//connection to store
@connect((store) => {
	return {//props
		url: store.url,
		team: store.state.list.selected['CustomerNewProjectPickTeam'],
		data: store.state.form.data
	}
},)
//class confirmnewproject
export default class ConfirmNewProject extends React.Component {
	componentWillMount(){
		var data = Object.assign({}, this.props.data)
		var team = this.props.team.slice()
		this.customerId = data.customerId
		this.customer = {
			name: data.customerName,
			address: data.customerAddress
		}
		this.project = {
			customerId: data.customerId,
			name: data.projectName,
			address: data.projectAddress,
			startDate: data.projectStartDate,
			endDate: data.projectEndDate
		}
		this.team = []
		for(var i in team){
			if(team[i] != null){
				if(team[i].id != null){
					this.team.push(team[i].id)
				}
			}
		}
		console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
		console.log(this.customer)
		console.log(data)
	}

	upload(e){
		e.target.disabled = true
		if(this.customerId == null){
			axiosInjector('customers', 'post', this.customer, this)
			.then(function(response){
				response.this.project.customerId = response.data[0].Auto_increment - 1
				axiosInjector('projects', 'post', response.this.project, response.this)
				.then(function(response){
					const projectId = response.data[0].Auto_increment - 1
    				var inject = {teamlength:response.this.team.length, uploaded:0,failed:false, this:response.this }
    				for(var i in response.this.team){
    					axiosInjector('teamMembers', 'post', {projectId:projectId, employeeId:response.this.team[i], allowanceAppPriority:false, allowanceAppMember:false, paymentAppPriority:-1, paymentAppMember:false}, inject)
    					.then(function(response){
    						response.this.uploaded++
    						if(response.this.uploaded == response.this.teamlength){
    							NotificationManager.info("Sucessfully created new customer and project")
    							response.this.this.props.dispatch(fetchList('customers'))
    						}
    					}, function(error){
    						if(!error.this.failed){
    							NotificationManager.error('Failed to add Team to project')
    							error.this.failed = true
    						}
    					})
    				}

				}, function(error){
					NotificationManager.error('Failed to create new Project')
				})
			}, function(error){
				NotificationManager.error('Failed to add new customer')
			})

		}else{
			axiosInjector('customers/'+this.customerId, 'post', this.customer, this)
			.then(function(response){
				axiosInjector('projects', 'post', response.this.project, response.this)
				.then(function(response){
					const projectId = response.data[0].Auto_increment - 1
    				var inject = {teamlength:response.this.team.length, uploaded:0,failed:false }
    				for(var i in response.this.team){
    					axiosInjector('teamMembers', 'post', {projectId:projectId, employeeId:response.this.team[i],allowanceAppMember:false,paymentAppMember:false}, inject)
    					.then(function(response){
    						response.this.uploaded++
    						if(response.this.uploaded == response.this.teamlength){
    							NotificationManager.info("Sucessfully added new project")
    						}
    					}, function(error){
    						if(!error.this.failed){
    							NotificationManager.error('Failed to add Team to project')
    							error.this.failed = true
    						}
    					})
    				}

				}, function(error){
					NotificationManager.error('Failed to create new Project')
				})
			}, function(error){
				NotificationManager.error('Failed to update customer')
			})
		}
	}
	render(){
		var { project, customer} = this
		var { team } = this.props
		return (
			<div>
			<div class="panel panel-default">
					<div class="panel-heading"> <h4>New Customer Details</h4></div>
 						 <div class="panel-body">
  							<table class="table">
								<tbody>
									<tr>
							    		<th>Name </th>
							    		<th>Address </th>
							    	</tr>
							    	<tr>
							    		<td>{customer.name} </td>
							    		<td>{customer.address} </td>
							    	</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="panel panel-default">
					<div class="panel-heading"> <h4>New Project Details</h4></div>
 						 <div class="panel-body">
  							<table class="table">
								<tbody>
							    	<tr>
							    		<th>Name </th>
							    		<th>Address </th>
							    		<th>Start Date </th>
							    		<th>End Date </th>
							    	</tr>
							    	<tr>
							    		<td>{project.name} </td>
							    		<td>{project.address} </td>
							    		<td>{project.startDate} </td>
							    		<td>{project.endDate} </td>
							    	</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="panel panel-default">
					<div class="panel-heading"> <h4>New Project Team details</h4></div>
 						 <div class="panel-body">
  							<table class="table">
								<tbody>
									<tr>
							    		<th>Name </th>
							    		<th>Designation</th>
							    	</tr>
							    	{ team.map( function(member) { 
										if(member != null){
											return (
											<tr key={member.id} class="form-group">
												<td>{member.name}</td>
												<td>{member.designation}</td>
											</tr>
											)
										}
										} 
									)}
								</tbody>
							</table>
						</div>
					</div>
			<form class="form-horizontal">
				
				<div class="form-group">
				    <div class="col-sm-7">
						<button onClick={this.upload.bind(this)} type="button" class="btn btn-warning">Save</button>
					</div>
				</div>
			</form>
			</div>
		)
	}
}