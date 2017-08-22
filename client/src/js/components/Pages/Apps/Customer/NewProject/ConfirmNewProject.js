import React from "react"
import { connect } from "react-redux"
import { NotificationManager } from 'react-notifications'
import { axiosInjector } from '../../../../customFunctions'
import { fetchList } from "../../../../../actions/listsActions"
@connect((store) => {
	return {//props
		url: store.url,
		team: store.state.list.selected['CustomerNewProjectPickTeam'],
		data: store.state.form.data
	}
},)
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
			startDate: data.startDate,
			endDate: data.endDate
		}
		this.team = []
		for(var i in team){
			if(team[i] != null){
				if(team[i].id != null){
					this.team.push(team[i].id)
				}
			}
		}
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
			<form class="form-horizontal">
				<div class="form-group">
					<label class="col-sm-3 control-label">Customer Name : </label>
					<label class="col-sm-7 control-label">{customer.name}</label>
	    		</div>	
				<div class="form-group">
					<label class="col-sm-3 control-label">Customer Address : </label>
					<label class="col-sm-7 control-label">{customer.address}</label>
				</div>
				<div class="form-group">
					<label class="col-sm-3 control-label">Project Name : </label>
					<label class="col-sm-7 control-label">{project.name}</label>
	    		</div>	
				<div class="form-group">
					<label class="col-sm-3 control-label">Project Address : </label>
					<label class="col-sm-7 control-label">{project.address}</label>
				</div>
				<div class="form-group">
					<label class="col-sm-3 control-label">Project Starting Date : </label>
					<label class="col-sm-7 control-label">{project.startDate}</label>
	    		</div>	
				<div class="form-group">
					<label class="col-sm-3 control-label">Project End Date : </label>
					<label class="col-sm-7 control-label">{project.endDate}</label>
				</div>
				<div>
				<h3>team</h3>
				{ team.map( function(member) { 
					if(member != null){
						return (
						<div key={member.id} class="form-group">
							<label class="col-sm-3 control-label">{member.name}</label>
							<label class="col-sm-3 control-label">{member.designation}</label>
						</div>
						)
					}
					} 
				)}
				</div>
				<div class="form-group">
				    <div class="col-sm-offset-2 col-sm-7">
						<button onClick={this.upload.bind(this)} type="button" class="btn btn-warning">Save</button>
					</div>
				</div>
			</form>
		)
	}
}