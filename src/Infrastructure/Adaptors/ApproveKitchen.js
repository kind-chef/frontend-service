import axios from "axios";

export default async function ApproveKitchen(id) {
  const callout = await axios.post(
    `http://localhost:8090/approve-kitchen/${id}`
  );
  return callout.data;
}
