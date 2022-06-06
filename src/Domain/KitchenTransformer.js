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
    item.email.value,
    item.phoneNumber?.value,
    item.address.street.value,
    item.address.city.value,
    item.address.province.value,
    item.address.postalCode.value,
    item.capacity.value,
    item.images.value
  );
}
