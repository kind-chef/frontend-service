import axios from "axios";

export default async function assignWorkshop(content) {
  return await axios.post("http://localhost:8090/assign-workshop", content);
}
