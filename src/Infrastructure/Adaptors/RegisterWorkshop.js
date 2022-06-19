import axios from "axios";

export default async function RegisterWorkshop(workshop) {
  return axios.post("https://localhost:8090/register-workshop", workshop);
}
