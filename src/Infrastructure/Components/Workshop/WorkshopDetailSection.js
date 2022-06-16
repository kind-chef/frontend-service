import DetailSection from "../UI/DetailSection";
import { TextField } from "@mui/material";
import DetailField from "../UI/DetailField";
export default function WorkshopDetailSection(props) {
  const workshop = props.workshop;
  return (
    <>
      <DetailSection title="Details">
        <DetailField label="Name" value={workshop.name} />
        <DetailField label="description" value={workshop.description} />
        <DetailField label="Capacity" value={workshop.capacity} />
        <DetailField
          label="Remaining Capacity"
          value={workshop.remainingCapacity}
        />
        <DetailField label="Date" value={workshop.date} />
        <DetailField label="Price" value={workshop.price} />
        <DetailField label="Keywords" value={workshop.keywords} />
        <DetailField label="Ingredients" value={workshop.ingredients} />
      </DetailSection>
      <DetailSection title="Address">
        <DetailField label="Street" value={workshop.street} />
        <DetailField label="City" value={workshop.city} />
        <DetailField label="Postal Code" value={workshop.postalCode} />
        <DetailField label="Povince" value={workshop.province} />
      </DetailSection>
    </>
  );
}
