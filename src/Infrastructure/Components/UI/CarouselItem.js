export default function CarouselItem(props) {
  return (
    <>
      <img
        src={props.item}
        alt={props.item}
        style={{ maxWitdth: "500px", maxHeight: "500px" }}
      />
    </>
  );
}
