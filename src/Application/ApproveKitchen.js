import approveKitchen from "../Infrastructure/Adaptors/ApproveKitchen";

export default class ApproveKitchen {
  async execute(id) {
    return await approveKitchen(id);
  }
}
