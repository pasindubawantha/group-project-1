import axios from "axios";

export function getEmployeeDetails(id) {
	return{
		type:"EMPLOYEE_EMPLOYEEVIEW_GET",
		payload:axios.get("/employees/"+id)
	}
}