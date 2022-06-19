import assignWorkshop from "../Infrastructure/Adaptors/AssignWorkshop";

export default class AssignWorkshop {
  async execute(content) {
    return await assignWorkshop(content);
  }
}
