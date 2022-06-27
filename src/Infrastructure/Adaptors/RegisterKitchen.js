import axios from "axios";

export default async function registerKitchen(kitchen) {
  return await axios.post("http://localhost:8090/register-kitchen", kitchen);
}
