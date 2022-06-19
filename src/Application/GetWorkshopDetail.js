import getWorkshopDetail from "../Infrastructure/Adaptors/GetWorkshopDetail";

export default class GetWorkshopDetail {
  async execute(id) {
    return await getWorkshopDetail(id);
  }
}
