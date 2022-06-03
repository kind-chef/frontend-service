import axios from "axios";

export default class UnapprovedKitchenService {
  async getKitchens() {
    const result = await axios.get("/getall");
    return result.data;
  }
}
