import React from "react"
import { connect } from "react-redux"

export default class List extends React.Component {
	constructor(){
		super()
		this.state = {
			showList:[],
			listAll:[],
			search:{fields:null}
		}
	}
	search(searchfor){
		var {listAll , search} = this.state

		if(searchfor == ""){
			this.state.showList = listAll
			this.state.render()
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
							console.log(showList)
							showList.push(listItem)

							break
							found =true
						}
					if(found){
						found = false
						break
					}
				}
			}
			this.state.showList = showList 
			this.state.render()
			//this.props.dispatch(to show list showList)
		}
	}
	onChangeSearch(e){
		this.search(e.target.value)
	}

	render(){
		return(<h3>no list</h3>)
	}
}
