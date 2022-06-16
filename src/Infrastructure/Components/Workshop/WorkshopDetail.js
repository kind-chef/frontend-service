import { useState, useEffect, useCallback } from "react";
import { Grid } from "@mui/material";
import GetWorkshopDetail from "../../../Application/GetWorkshopDetail";
import CarouselKf from "../UI/CarouselKf";
import WorkshopDetailSection from "./WorkshopDetailSection";
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
    <Grid container>
      <Grid xs={6}>
        <CarouselKf items={workshop.images} />
      </Grid>
      <Grid xs={6}>
        <WorkshopDetailSection workshop={workshop} />
      </Grid>
    </Grid>
  );
}
