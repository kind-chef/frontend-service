import axios from "axios";

export default async function registerKitchen(kitchen) {
  return await axios.post("https://localhost:8090/register-kitchen", kitchen);
}
