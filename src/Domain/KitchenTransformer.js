import Kitchen from "./Kitchen";

export default function transformKitchens(KitchenModels) {
  return KitchenModels.map((item) => {
    return transformKitchen(item);
  });
}

export function transformKitchen(item) {
  return new Kitchen(
    item.id.value,
    item.name.value,
    item.street.value,
    item.city.value,
    item.province.value,
    item.postCode.value,
    item.capacity.value
  );
}
