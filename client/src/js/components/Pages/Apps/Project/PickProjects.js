import React from "react"
import { connect } from "react-redux"
import List from "../../Components/List"

@connect((store) => {
    return {//props
        url: store.url,
        projectList: store.lists.projects.data
    }
},)
export default class PickProjects extends React.Component {
    render(){
        var fields = {
            key:"id",
            id:"id",
            label:["name","id"],
            search:["name"]
        }
        var headers = {
            show:"Pick Project"
        }
        var nextURL = this.props.url.slice(0, this.props.url.length - 1).concat({ name: "Project Details", viewID: "ProjectViewProject"})
        return (<List nextURL={nextURL} listID={this.props.url[this.props.url.length-1].viewID} listAll={this.props.projectList} fields={fields} headers={headers} />)
    }
}