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
	componentWillMount(){
		this.state = {
			customerName: null,
			customerAddress: null,
			nameValidated:false,
			addressValidated: false
		}
	}
	confirm(e){
	}
	changeName(e){
		if(e.target.value != e.target.placeholder && e.target.value != "" && e.target.value != null){
			this.setState({ customerName: e.target.value })
			this.setState({ nameValidated: true })
		}else{
			this.setState({ nameValidated: false })
		}
	}
	changeAddress(e){
		if(e.target.value != e.target.placeholder && e.target.value != "" && e.target.value != null){
			this.setState({ addressName: e.target.value })
			this.setState({ addressValidated: true })
		}else{
			this.setState({ addressValidated: false })
		}
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
				    	<ButtonLink disabled={!(this.state.nameValidated && this.state.addressValidated)} url={this.props.url.concat({name:'New Project ', viewID:'CustomerNewCustomerNewProject'})} name="Create Project" onClick={this.confirm.bind(this)}/>
				  	</div>
				  </div>
				</form>
			)
		}else{
			return(<NewProject customerData={this.state} />)
		}
	}
}