import axios from "axios";

export default async function purchase(item) {
  return axios.post("https://localhost:8090/register-booking", item);
}
