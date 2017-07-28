import axios from "axios";

export function getVendorDetails(id) {
	return{
		type:"VENDOR_VENDORVIEW_GET",
		payload:axios.get("/vendors/"+id)
	}
}