export default class Kitchen {
  id;
  street;
  city;
  province;
  name;
  capacity;
  postalCode;
  constructor(id, name, street, city, province, postalCode, capacity) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.street = street;
    this.province = province;
    this.postalCode = postalCode;
    this.capacity = capacity;
  }
}
