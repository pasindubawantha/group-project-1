import React from "react"
import { connect } from "react-redux"
import { NotificationManager } from 'react-notifications';
import { getProjectDetails } from '../../../../actions/Apps/projectActions'

@connect((store) => {
    return {//props
        url: store.url,
        projectId: store.state.list.picked['ProjectAll'],
        project: store.apps.Project.tabs.ViewProject.project
    }
},)
export default class ViewProject extends React.Component {
    componentWillMount(){
        this.props.dispatch(getProjectDetails(this.props.projectId))
        this.state = {warrned: false}
    }
    warn(){
        NotificationManager.warning('Cannot get project data')
    }

    render() {
        var { projectId, project, url } = this.props
        if(project.downloaded){
            return  (
                <form class="form-horizontal">
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Name : </label>
                        <label class="col-sm-7 control-label">{project.data.name}</label>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">StartDate : </label>
                        <label class="col-sm-7 control-label">{project.data.startDate}</label>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">EndDate : </label>
                        <label class="col-sm-7 control-label">{project.data.endDate}</label>
                    </div>

                </form>
            )
        }else{
            if(project.downloadError != null){
                if(!this.state.warrned){
                    this.warn()
                    this.state.warrned = true
                }
                return <p> error </p>
            }
            return (<p>loading</p>)
        }
    }
}