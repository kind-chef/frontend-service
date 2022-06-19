import axios from "axios";

export default async function GetUnassignedWorkshops() {
  return axios.get("https://localhost:8090/unassigned-workshops");
}
