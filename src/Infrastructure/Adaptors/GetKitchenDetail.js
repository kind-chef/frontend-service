import axios from "axios";

export default async function getKitchenDetail(id) {
  const callout = await axios.get(`/kitchen/${id}`);
  return callout.data;
}
