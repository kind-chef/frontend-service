import { useState, useEffect, useCallback } from "react";
import { Grid } from "@mui/material";
import GetWorkshopDetail from "../../../Application/GetWorkshopDetail";
import CarouselKf from "../UI/CarouselKf";
import ActiveWorkshopDetailSection from "./ActiveWorkshopDetailSection";
export default function WorkshopDetail(props) {
  const workshopId = props.workshopId;
  const [workshop, setWorkshop] = useState({});

  const retrieveWorkshop = useCallback(async () => {
    setWorkshop(await new GetWorkshopDetail().execute(workshopId));
  }, [workshopId]);

  useEffect(() => {
    retrieveWorkshop();
  }, [retrieveWorkshop, workshopId]);

  if (!workshop.name) return <p>loading data</p>;
  return (
    <Grid container spacing={5}>
      <Grid item xs={6}>
        <CarouselKf items={workshop.images} />
      </Grid>
      <Grid item xs={6}>
        <ActiveWorkshopDetailSection workshop={workshop} />
      </Grid>
    </Grid>
  );
}
