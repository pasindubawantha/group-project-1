import axios from "axios";

export function getProjectDetails(id) {
	return{
		type:"PROJECT_PROJECTVIEW_GET",
		payload:axios.get("/projects/"+id)
	}
}