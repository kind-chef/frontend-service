import axios from "axios";

export default async function getKitchenDetail(id) {
  const callout = await axios.get(`https://localhost:8090/workshop/${id}`);
  return callout.data;
}
