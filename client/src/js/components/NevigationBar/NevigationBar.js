import React from "react"
import { connect } from "react-redux"
import MenuItem from "./MenuItem"
import User from "./User"

@connect((store) => {
	return {//props
		url: store.url,
		user: store.user
	}
},)
export default class NevigationBar extends React.Component {
	render() {
		return  (
			 <nav class="navbar navbar-default navbar-static-top">
		      <div class="container">
		        <div class="navbar-header">
		          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		            <span class="sr-only">Toggle navigation</span>
		            <span class="icon-bar"></span>
		            <span class="icon-bar"></span>
		            <span class="icon-bar"></span>
		          </button>
		          	<a class="navbar-brand-logo">
		          	<img alt="Brand" src={this.props.user.companyLogo} />
		          	</a>
		        	<a class="navbar-brand">
		        	{this.props.user.companyName}
		        	</a>
		        </div>
		        <div id="navbar" class="navbar-collapse collapse">
		          <ul class="nav navbar-nav">
		            <MenuItem url={[{name:"Home", viewID:"Home"}]} name="Home"/>
		          </ul>
		          <User />
		        </div>
		      </div>
    </nav>)
	}
}