import axios from "axios";

export default async function RegisterWorkshop(workshop) {
  return axios.post("http://localhost:8090/register-workshop", workshop);
}
