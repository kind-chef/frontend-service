import axios from "axios";

export default async function purchase(item) {
  return axios.post("http://localhost:8090/register-booking", item);
}
