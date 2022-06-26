import axios from "axios";

export default function getAssignedWorkshops(userId) {
  return axios.get(`https://localhost:8090/booked-workshop/${userId}`);
}
