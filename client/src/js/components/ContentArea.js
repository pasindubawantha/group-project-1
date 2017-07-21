import React from "react"
import { connect } from "react-redux"
import App from "./Pages/Apps/App"
import Notifications from "./Pages/Notifications/Notifications"
import Desktop from "./Pages/Desktop/Desktop"

@connect((store) => {
	return {//props
		url: store.url
	}
},)
export default class ComponentArea extends React.Component {
	selectPage(url){
		
		if(url.length == 1)
			switch(url[0].viewID){
				case "Notifications" : 
					{return (<Notifications/>) 
					break}
				case "Home" : 
					{return <Desktop />
					break } 
			}
		else{
				return(<App appID ={url[1].viewID}/>)
		}
	}

	render() {
		return (this.selectPage(this.props.url))
	}
}