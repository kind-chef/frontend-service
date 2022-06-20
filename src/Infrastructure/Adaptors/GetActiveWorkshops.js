import axios from "axios";

export default async function getActiveWorkshops() {
  return axios.get("https://localhost:8090/active-workshops");
}
