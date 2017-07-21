import React from "react"
import { connect } from "react-redux"
import ButtonLink from "../Components/ButtonLink"
//import ButtonLink from "../../Components/ButtonLink"
@connect((store) => {
	return {//props
		url: store.url,
		bigState: store.state
	}
},)
export default class MakePayments extends React.Component {
	constructor(){
		super()
		this.state = {
		}
	}
	confirmPayment(e){
		console.log(e)
		console.log(this.state.ammount)
		console.log(this.state.discription)
	}
	changeEmail(e){
		this.state.email = e.target.value
	}
	changePassword(e){
		this.state.password = e.target.value
	}
	changeRemeberMe(e){
		this.state.rememberMe = e.target.value
	}
	LoginOnClickDo(e){
		console.log(this.state)
	}
	componentWillDismount(){
		this.props.dispatch(defaultupload())
	}

	render() {
		return  (
			<div class="row">
			<div class="col-md-4 col-md-offset-4">
			<div class="centering text-center">
			<form class="form-horizontal">
				<div class="form-group">
					<label for="inputEmail3" class="col-sm-2 control-label">Email</label>
					<div class="col-sm-10">
			    		<input onChange={this.changeEmail.bind(this)} type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
			    	</div>
			  	</div>
			 	<div class="form-group">
			    	<label for="inputPassword3" class="col-sm-2 control-label">Password</label>
			    	<div class="col-sm-10">
			      		<input onChange={this.changePassword.bind(this)} type="password" class="form-control" id="inputPassword3" placeholder="Password"/>
			    	</div>
			  	</div>
			  	<div class="form-group">
			    	<div class="col-sm-offset-2 col-sm-10">
			      		<div class="checkbox">
			        		<label>
			          			<input onChange={this.changeRemeberMe.bind(this)} type="checkbox"/> Remember me
			        		</label>
			      		</div>
			    	</div>
			  	</div>
				<div class="form-group">
			    	<div class="col-sm-offset-2 col-sm-10">
			      		<ButtonLink name="Login" url={[{name:"Home",viewID:"Home"}]} onClick={this.LoginOnClickDo.bind(this)}/>
			    	</div>
			 	 </div>
			</form>
			</div>
			</div>
			</div>
			)
		}
	//}
}