import DetailSection from "../UI/DetailSection";
import DetailField from "../UI/DetailField";
import {
  Button,
  Box,
  Typography,
  Modal,
  TextField,
  Stack,
} from "@mui/material";
import PurchaseIcon from "@mui/icons-material/ShoppingCart";
import { useState, useRef } from "react";
import Purchase from "../../../Application/Purchase";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function ActiveWorkshopDetailSection(props) {
  let places = useRef();
  const workshop = props.workshop;
  const displayModal = () => {
    setOpen(true);
  };

  const purchaseHandler = async () => {
    const loggedInUser = JSON.parse(localStorage.getItem("userInfo"));
    console.log(workshop._id);
    console.log("purchase finished" + loggedInUser._id);
    const purchaseParam = {
      customerId: loggedInUser._id,
      workshopId: workshop._id,
      places: places.current.value,
    };
    const useCase = new Purchase();
    await useCase.execute(purchaseParam);
    console.log(purchaseParam);
    setOpen(false);
  };
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

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
      </DetailSection>
      <DetailField label="Date" value={workshop.date} />
      <DetailField label="Price" value={workshop.price} />
      <DetailField label="Ingredients" value={workshop.ingredients} />
      <DetailSection title="Address">
        <DetailField label="Street" value={workshop.street} />
        <DetailField label="City" value={workshop.city} />
      </DetailSection>
      <Button
        variant="contained"
        endIcon={<PurchaseIcon />}
        onClick={displayModal}
      >
        Purchase
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Finish your purchase
          </Typography>
          <Stack direction="row" spacing={5}>
            <TextField
              variant="standard"
              type="number"
              label="Places"
              defaultValue={1}
              inputRef={places}
            />
            <Button
              variant="contained"
              endIcon={<PurchaseIcon />}
              onClick={purchaseHandler}
              style={{ marginLeft: "10px" }}
            >
              Finish Purchase
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
