import React from "react"
import { connect } from "react-redux"
import { NotificationManager } from 'react-notifications'
import { axiosInjector } from '../../../customFunctions'
import { fetchList } from "../../../../actions/listsActions"
import ViewProject from "./ViewProject"

@connect((store) => {
    return {//props
        url: store.url,
        project: store.apps.Project.tabs.ViewProject.project
    }
},)
export default class EditProject extends React.Component{
    componentWillMount(){
        this.state = {
            projectId:this.props.project.data.id,
            projectName:this.props.project.data.name,
            projectStartDate:this.props.project.data.startDate,
            projectEndDate:this.props.project.data.endDate,
            nameValidated:false,
            startDateValidated:false,
            endDateValidated: false
        }
    }
    confirm(e){
    }
    changeName(e){
        if(e.target.value != "" && e.target.value != null){
            this.setState({ projectName: e.target.value })
            this.setState({ nameValidated: true })
        }else{
            this.setState({ nameValidated: false })
        }
    }
    changeStartDate(e){
        if(e.target.value != "" && e.target.value != null){
            this.setState({projectStartDate: e.target.value })
            this.setState({ startDateValidated: true })
        }else{
            this.setState({ startDateValidated: false })
        }
    }
    changeEndDate(e){
        if(e.target.value != "" && e.target.value != null){
            this.setState({projectEndDate: e.target.value })
            this.setState({ endDateValidated: true })
        }else{
            this.setState({ endDateValidated: false })
        }
    }
    save(e){
        e.target.disabled = true
        var project = {
            id: this.state.projectId,
            name: this.state.projectName,
            startDate: this.state.projectStartDate,
            endDate:this.state.projectEndDate,
        }
        axiosInjector('/projects/'+ project.id + '/', 'post', project, this)
            .then(function(response){
                response.this.props.dispatch(fetchList('projects'))
                NotificationManager.info('Sucessfully updated customer details')
            }, function(error){
                NotificationManager.error('Unable to update Customer')
            })
    }
    render() {
        if(this.props.url[3] == null){
            return  (
                <form class="form-horizontal">
                    <div class="form-group">
                        <label for="inputName" class="col-sm-2 control-label">Name</label>
                        <div class="col-sm-7">
                            <input onChange={this.changeName.bind(this)} type="text" class="form-control" id="inputEmail3" placeholder={this.props.project.data.name}/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAmmount" class="col-sm-2 control-label">StartDate</label>
                        <div class="col-sm-7">
                            <input onChange={this.changeStartDate.bind(this)} type="Date" class="form-control" id="inputPassword3" placeholder={this.props.project.data.startDate}/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAmmount" class="col-sm-2 control-label">EndDate</label>
                        <div class="col-sm-7">
                            <input onChange={this.changeEndDate.bind(this)} type="Date" class="form-control" id="inputPassword3" placeholder={this.props.project.data.endDate}/>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-7">
                            <button onClick={this.save.bind(this)} type="button" class="btn btn-warning">Save</button>

                        </div>
                    </div>
                </form>
            )
        }else{
            return(<ViewProject projectData={this.state} />)
        }
    }
}
