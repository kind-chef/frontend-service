import CarouselSlide from "react-material-ui-carousel";

export default function CarouselItem(props) {
  return (
    <>
      <CarouselSlide key={props.item}>
        <img
          src={props.item}
          alt={props.item}
          style={{ maxWitdth: "500px", height: "500px" }}
        />
      </CarouselSlide>
    </>
  );
}
