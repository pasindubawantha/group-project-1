import React from "react"
import { connect } from "react-redux"
import Icon from "./Icon"
import { fetchList } from "../../../actions/listsActions"
import { updateDesktop } from "../../../actions/desktopActions"

@connect((store) => {
	return {//props
		url: store.url,
		appList: store.user.appList,
		apps: store.apps,
		lists: store.lists,
		desktop: store.desktop
	}
},)
export default class Desktop extends React.Component {
	fetchDependancies(listName){
		var { downloaded, downloading } = this.props.lists[listName]
		if( !downloaded && !downloading && this.state[listName]==null){
			this.state[listName] = true
			this.props.dispatch(fetchList(listName))
		}
	}

	componentWillMount(){
		this.state = {}
		var { downloaded } = this.props.desktop
		if(!downloaded){
			var { apps, appList } = this.props
			for(var i in appList){
				var appName = appList[i]
				var depnedantList = apps[appName].depnedantLists
				for(var j in depnedantList){
					this.fetchDependancies(depnedantList[j])
				}
			}
			this.props.dispatch(updateDesktop({downloaded:true}))
		}
	}

	render() {
		var { downloaded } = this.props.desktop
		if(downloaded){
			return(
				<row>
					{this.props.appList.map( app => 
						(<Icon key={this.props.apps[app].name} 
							name={this.props.apps[app].name} 
							img={this.props.apps[app].icon} 
							url={this.props.url.concat({name: this.props.apps[app].name, viewID:app})}
							/>))}
				</row>)
		}else{

			return (<p> loading </p>)
		}
	}
}