import React from "react"
import { connect } from "react-redux"
import SideMenu from "../../Components/SideMenu.js"
import PickProjects from "./PickProjects"
import ViewProject from "./ViewProject"


@connect((store) => {
	return {//props
		url: store.url,
		app: store.apps.Project,
	}
},)
export default class ProjectApp extends React.Component {
	getTab(){
		if(this.props.url[2] == null){
			return <h2> Welcome to Project App </h2>
		}
		var tabViewID = this.props.url[2].viewID
		switch(tabViewID){
			case "ProjectAll":{
				return(<PickProjects />)
				break
			}
            case "ViewProject":{
                return(<ViewProject />)
                break
            }

			default : {
				return <h2> Welcome to Project App </h2>
			}
		}
	}
	getSideMenue(){
		var url = [{name:"Home" ,viewID:"Home"},{name:this.props.app.name ,viewID:"Project"}]
		if(this.props.url[2] == null){
			return(<SideMenu menuItems={this.props.app.menuItems} name={this.props.app.name} concatURL={url} />)
		}
		/*
		var tabViewID = this.props.url[2].viewID
		switch(tabViewID){
			case "ProjectAll":{
				return(<SideMenu menuItems={this.props.app.menuItems} name={this.props.app.name} concatURL={url} />)
				break
			}
            case "ViewProject":{
                return(<SideMenu menuItems={this.props.app.tabs.ViewProject.menuItems} name={this.props.app.tabs.ViewProject.name} concatURL={url} />)
                break
            }

			default : {*/
				return <h2> Projects </h2>
			//}
		//}
	}
	render() {
		return  (
			<div class="row">
			  <div class="col-md-3">
                  {this.getSideMenue()}
			  </div>
			  <div class="col-md-9">
                  {this.getTab()}

			  </div>
			</div>
			)
	}
}