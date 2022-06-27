import axios from "axios";

export default function getAssignedWorkshops(userId) {
  return axios.get(`http://localhost:8090/booked-workshop/${userId}`);
}
