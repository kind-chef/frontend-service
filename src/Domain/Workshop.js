export default class Workshop {
  name;
  description;
  capacity;
  remainingCapacity;
  date;
  price;
  keywords;
  ingredients;
  video;
  images;
  assigned;
  city;
  postalCode;
  province;
  street;

  constructor(
    name,
    description,
    capacity,
    remainingCapacity,
    date,
    price,
    keywords,
    ingredients,
    video,
    images,
    assigned,
    city,
    postalCode,
    province,
    street
  ) {
    this.name = name;
    this.description = description;
    this.capacity = capacity;
    this.remainingCapacity = remainingCapacity;
    this.date = date;
    this.price = price;
    this.keywords = keywords;
    this.ingredients = ingredients;
    this.video = video;
    this.images = images;
    this.assigned = assigned;
    this.city = city;
    this.postalCode = postalCode;
    this.province = province;
    this.street = street;
  }
}
