import React from "react"
import { connect } from "react-redux"
import List from "./SubComponents/List"

import { createUserSession, setUserName } from "../actions/userActions"
import { fetchList } from "../actions/listsActions"
//connect ( fucntion to get data from store to components.props,  )
@connect((store) => {
	return {//props
		user: store.user
	}
},)
export default class Layout extends React.Component {
	componentWillMount() {
		this.props.dispatch(fetchList("vendor"))
		//his.props.dispatch(fetchUser())
		//this.props.dispatch(setUserName("na"))
		//this.props.dispatch(createUserSession('asd', 'asd'))
		//this.props.dispatch(createUserSession2('asd', 'asd'))
	}
	
	render() {
		return  (<List listType="vendor" />)
		// const { user, tweets } = this.props
		// if(user.SessionID.fetching){
		// 	return (<h1> is fetching </h1>)
		// }
		// else if(user.SessionID.fetched){
		// 	return  (<List listType="vendor" />)
		// }
		// else if(user.SessionID.error == null){
		// 	return  (<List listType="vendor" />)
		// }
		// else {
		// 	return (<h1> Erorr ! </h1>)
		// }
		
	}
}