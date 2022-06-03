import UnapprovedKitchenService from "../Domain/UnapprovedKitchenService";
import transform from "../Domain/KitchenTransformer";
export default class GetUnapprovedKitchens {
  async execute() {
    const service = new UnapprovedKitchenService();
    const Kitchens = await service.getKitchens();
    return transform(Kitchens);
  }
}
