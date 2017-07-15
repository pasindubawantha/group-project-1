import React from "react"
import { connect } from "react-redux"

//this is abstract
export default class List extends React.Component {
	constructor(){
		super()
		//this.props.dispatch(to get listall,, will fill show all too)
	}
	search(searchfor){
		var {listAll , search} = this.props.tab
		if(searchfor == ""){
			//this.props.dispatch( to show list listAll)
		}else{
			var showList = []
			var strings = searchfor.toLowerCase()
			strings = strings.split(" ")
			var found = false
			for(var i in listAll){
				found = false
				var listItem = listAll[i]
				for(var j in search.fields){
					var field = search.fields[j]
					for(var n in strings)
						var str = strings[n]
						if(listItem[field].includes(strings[n])){
							showList.append(listItem)
							break
							found =true
						}
					if(found){
						found = false
						break
					}
				}
			}
			this.props.dispatch(to show list showList)
		}
	}
	onChangeSearch(e){
		this.search(e.target.value)
	}

	// render(){
	// 	return(this.props.app[this.props.appID][this.props.tabID].showList.map(item => <a> </a>))
	// }
