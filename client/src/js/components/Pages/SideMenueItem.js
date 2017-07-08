import React from "react"
import Link from "../SubComponents/Link.js"
import { connect } from "react-redux"

@connect((store) => {
	return {//props
		url: store.url
	}
},)
export default class SideMenueItem extends React.Component {
	createButton(linkArray){
		const curentApp = this.props.url[this.props.url.length-1].viewID
		//console.log(curentApp)
		if(linkArray.length == 1){
			console.log(linkArray)
			if(curentApp === linkArray[0].viewID){
				return (<li class="active"> <Link url={this.props.concatLink.concat({name: linkArray[0].name,viewID: linkArray[0].viewID})} name={linkArray[0].name} /></li>)
			}
			else{
				return (<li> <Link url={this.props.concatLink.concat({name: linkArray[0].name,viewID: linkArray[0].viewID})} name={linkArray[0].name} /></li>)
			}
		}else{
			var isActive = false
			linkArray.forEach( (item) => {if(curentApp === item.viewID) isActive = true;})
			if(isActive){
				return (<li class="dropdown active">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{linkArray[0].name}<span class="caret"></span></a>
						<ul class="dropdown-menu"> 
						{linkArray.slice(1,).map( (item) =>{
							if(curentApp === item.viewID)
								return (<li class="active" key={item.viewID} ><Link url={this.props.concatLink.concat({name: item.name,viewID: item.viewID})} name={item.name} /></li>)
							else
								(<li key={item.viewID} ><Link url={this.props.concatLink.concat({name: item.name,viewID: item.viewID})} name={item.name} /></li>)
							}
								)}
						</ul> 
					</li>)
			}
			else{
				return (<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{linkArray[0].name}<span class="caret"></span></a>
						<ul class="dropdown-menu"> 
						{linkArray.slice(1,).map( item => <li key={item.viewID} ><Link url={this.props.concatLink.concat({name: item.name,viewID: item.viewID})} name={item.name} /></li>)}
						</ul> 
					</li>)
			}
		}
	}
	render() {
		return (this.createButton(this.props.linkArray))
	}
}