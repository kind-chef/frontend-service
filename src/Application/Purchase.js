import purchase from "../Infrastructure/Adaptors/Purchase";

export default class Purchase {
  async execute(item) {
    return await purchase(item);
  }
}
