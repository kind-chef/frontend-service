import getActiveWorkshops from "../Infrastructure/Adaptors/GetActiveWorkshops";

export default class GetActiveWorkshops {
  async execute() {
    return await getActiveWorkshops();
  }
}
