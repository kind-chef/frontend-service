import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";

export default function CarouselKf(props) {
  return (
    <Carousel height={500}>
      {props.items.map((item, i) => (
        <CarouselItem key={i} item={item} />
      ))}
    </Carousel>
  );
}
