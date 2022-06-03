import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import GetKitchenDetail from "../../Application/GetKitchenDetail";
import DetailSection from "../Components/UI/DetailSection";
import { Button, Grid, TextField, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ApproveKitchen from "../../Application/ApproveKitchen";
import { useNavigate } from "react-router-dom";

export default function KitchenDetail() {
  const [kitchenDetail, setKitchenDetail] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const kitchenId = params.kitchenId;
  const retrieveKitchenDetail = useCallback(async () => {
    setKitchenDetail(await new GetKitchenDetail().execute(kitchenId));
  }, [kitchenId]);

  useEffect(() => {
    retrieveKitchenDetail();
  }, [retrieveKitchenDetail, kitchenId]);

  if (!kitchenDetail.name) return <p>loading data</p>;
  const approveHandler = async () => {
    const result = await new ApproveKitchen().execute(kitchenId);
    if (!result) console.error("not able to approve");
    navigate("/kitchens");
  };
  return (
    <>
      <h1>This is the KitchenDetail Page : {kitchenDetail.name}</h1>
      <Grid container style={{ marginTop: "60px", minHeight: "100vh" }}>
        <Grid item xs={1}></Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={5}>
          <DetailSection title="Details">
            <TextField
              label="Name"
              defaultValue={kitchenDetail.name}
              InputProps={{
                readOnly: true,
              }}
              style={{ marginBottom: "10px", marginRight: "20px" }}
              variant="standard"
            ></TextField>
            <TextField
              label="Capacity"
              defaultValue={kitchenDetail.capacity}
              InputProps={{
                readOnly: true,
              }}
              style={{ marginBottom: "10px", marginRight: "20px" }}
              variant="standard"
            ></TextField>
          </DetailSection>
          <DetailSection title="Address">
            <TextField
              label="Street"
              defaultValue={kitchenDetail.street}
              InputProps={{
                readOnly: true,
              }}
              style={{ marginBottom: "10px", marginRight: "20px" }}
              variant="standard"
            ></TextField>
            <TextField
              label="City"
              defaultValue={kitchenDetail.city}
              InputProps={{
                readOnly: true,
              }}
              style={{ marginBottom: "10px", marginRight: "20px" }}
              variant="standard"
            ></TextField>
            <TextField
              label="Province"
              defaultValue={kitchenDetail.province}
              InputProps={{
                readOnly: true,
              }}
              style={{ marginBottom: "10px", marginRight: "20px" }}
              variant="standard"
            ></TextField>
            <TextField
              label="Postal Code"
              defaultValue={kitchenDetail.postalCode}
              InputProps={{
                readOnly: true,
              }}
              style={{ marginBottom: "10px" }}
              variant="standard"
            ></TextField>
          </DetailSection>
          <Stack>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              style={{ margin: "30px" }}
              onClick={approveHandler}
            >
              Approve
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </>
  );
}
