export function search(listAll, search, searchfor){
		if(searchfor == ""){
			return listAll
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
			return showList
			//this.props.dispatch(to show list showList)
		}
	}

export function find(list, field , id){
	for(var i in list){
		var item = list[i]
		if(item != null){
			if(item[field] == id){
				return i
				break
			}
		}
	}
	return -1
}

export function findNull(list){
	for(var i in list){
		var item = list[i]
		if(item == null){
			return i
			break
		}
	}
	return -1
}

export function deleteElement(array , index){
	var returnAry = []
	delete array[index]
	for(var i in array){
		var element = array[i]
		if(element != null){
			returnAry.push(element)
		}
	}
	return returnAry
}