import Workshop from "./Workshop";

export default function AssignedWorkshopList(props) {
  return (
    <>
      {props.workshops.map((workshop) => (
        <Workshop
          workshop={workshop}
          url={`/assigned-worshop/${workshop._id}`}
        />
      ))}
    </>
  );
}
