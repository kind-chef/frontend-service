import axios from "axios";

export default class UnapprovedKitchenService {
  async getKitchens() {
    const result = await axios.get("/unapproved-kitchens");
    return result.data;
  }
}
