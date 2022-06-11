import registerWorkshopAdapter from "../Infrastructure/Adaptors/RegisterWorkshop";

export default class RegisterWorkshop {
  async execute(workshop) {
    const result = await registerWorkshopAdapter(workshop);
    return result;
  }
}
