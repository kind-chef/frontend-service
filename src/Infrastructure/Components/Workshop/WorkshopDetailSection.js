import DetailSection from "../UI/DetailSection";
import DetailField from "../UI/DetailField";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AssignWorkshop from "../../../Application/AssignWorkshop";
import { useNavigate } from "react-router-dom";

export default function WorkshopDetailSection(props) {
  const workshop = props.workshop;
  const navigate = useNavigate();
  const assignHandler = async () => {
    const loggedInUser = JSON.parse(localStorage.getItem("userInfo"));
    if (!loggedInUser) return;
    const useCase = new AssignWorkshop();
    await useCase.execute({
      workshopId: workshop._id,
      userId: loggedInUser._id,
    });
    navigate("/unassigned-workshops");
  };
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
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        onClick={assignHandler}
      >
        Assign
      </Button>
    </>
  );
}
