import registerKitchen from "../Infrastructure/Adaptors/RegisterKitchen";

export default class RegisterKitchen {
  async execute(kitchen) {
    const result = await registerKitchen(kitchen);
    return result.data;
  }
}
