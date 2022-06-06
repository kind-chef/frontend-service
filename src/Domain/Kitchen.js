export default class Kitchen {
  id;
  street;
  city;
  province;
  name;
  capacity;
  postalCode;
  images;
  email;
  phoneNumber;
  constructor(
    id,
    name,
    email,
    phoneNumber,
    street,
    city,
    province,
    postalCode,
    capacity,
    images
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.city = city;
    this.street = street;
    this.province = province;
    this.postalCode = postalCode;
    this.capacity = capacity;
    this.images = images;
  }
}
