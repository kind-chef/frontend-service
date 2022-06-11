import getUnassignedWorkshops from "../Infrastructure/Adaptors/GetUnassignedWorkshops";

export default class GetUnassignedWorkshops {
  async execute() {
    return await getUnassignedWorkshops();
  }
}
