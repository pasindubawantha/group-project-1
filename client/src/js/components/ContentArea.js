import React from "react"
import { connect } from "react-redux"
import Page from "./Pages/Page.js"

@connect((store) => {
	return {//props
		url: store.url
	}
},)
export default class ComponentArea extends React.Component {
	selectPage(url){
		
		if(url.length == 1)
			return <h1> Home </h1>
		else
			switch(url[1].viewID){
				case "Notification" :{
					return <h1> Notifi </h1>
					break
					}
				default:{ 
					return(<Page appID = "app123"/>)
					}
			}
	}

	render() {
		return (this.selectPage(this.props.url))
	}
}