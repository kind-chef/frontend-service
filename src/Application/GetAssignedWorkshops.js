import getAssignedWorkshops from "../Infrastructure/Adaptors/GetAssignedWorshops";

export default class GetAssignedWorkshops {
  async execute(userId) {
    return await getAssignedWorkshops(userId);
  }
}
