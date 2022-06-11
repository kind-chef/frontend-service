import Workshop from "./Workshop";

export default function WorkshopList(props) {
  return (
    <>
      {props.workshops.map((workshop) => (
        <Workshop workshop={workshop} />
      ))}
    </>
  );
}
