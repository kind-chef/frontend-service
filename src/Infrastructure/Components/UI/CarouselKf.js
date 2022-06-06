import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";

export default function CarouselKf(props) {
  return (
    <Carousel>
      {props.items.map((item, i) => (
        <CarouselItem key={i} item={item} />
      ))}
    </Carousel>
  );
}
