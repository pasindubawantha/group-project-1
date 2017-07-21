import React from "react"
import { connect } from "react-redux"
import Icon from "./Icon"

@connect((store) => {
	return {//props
		url: store.url,
		appList: store.user.appList,
		apps: store.apps
	}
},)
export default class Desktop extends React.Component {
	render() {
		return(
			<row>
				{this.props.appList.map( app => 
					(<Icon key={this.props.apps[app].name} 
						name={this.props.apps[app].name} 
						img={this.props.apps[app].icon} 
						url={this.props.url.concat({name: this.props.apps[app].name, viewID:app})}
						/>))}
			</row>)
	}
}