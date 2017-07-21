import React from "react"
import { connect } from "react-redux"
import MenuItem from "./MenuItem"
import { logoutUser } from "../../actions/userActions"

@connect((store) => {
	return {//props
		user: store.user
	}
},)
export default class User extends React.Component {
	logoutUser(e){
		this.props.dispatch(logoutUser())
	}

	render() {
		return(
			<ul class="nav navbar-nav navbar-right">
				<a class="navbar-brand-logo">
		          		<img alt="Avatar" src={this.props.user.avatar} />
				</a>
		        <li class="dropdown">
		            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
		          		{this.props.user.name} <span class="caret"></span></a>
	            	<ul class="dropdown-menu">
	            		<li><a href="#">Settings</a></li>
	            		<li role="separator" class="divider"></li>
	            		<MenuItem url={[{name:"Home", veiwID:"Home"}]} name={"Logout"} onClick={this.logoutUser.bind(this)}/>
	            	</ul>
		        </li>
		    </ul>
		)
	}
}