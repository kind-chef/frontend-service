import getKitchenDetail from "../Infrastructure/Adaptors/GetKitchenDetail";
import { transformKitchen } from "../Domain/KitchenTransformer";
export default class GetKitchenDetail {
  async execute(id) {
    const result = await getKitchenDetail(id);
    const kitchen = transformKitchen(result);
    return kitchen;
  }
}
