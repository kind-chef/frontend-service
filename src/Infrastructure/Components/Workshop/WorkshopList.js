import Workshop from "./Workshop";

export default function WorkshopList(props) {
  return (
    <>
      {props.workshops.map((workshop) => (
        <Workshop
          workshop={workshop}
          url={`/unassigned-workshop/${workshop._id}`}
          hideAction={props.hideActions}
        />
      ))}
    </>
  );
}
