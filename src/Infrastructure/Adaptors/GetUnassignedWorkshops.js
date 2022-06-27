import axios from "axios";

export default async function GetUnassignedWorkshops() {
  return axios.get("http://localhost:8090/unassigned-workshops");
}
