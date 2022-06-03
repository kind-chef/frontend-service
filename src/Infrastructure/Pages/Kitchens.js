import GetUnapprovedKitchens from "../../Application/GetUnapprovedKitchens";
import KitchenList from "../Components/Kitchen/KitchenList";
import { Grid } from "@mui/material";
import { useEffect, useCallback, useState } from "react";
export default function Kitchens() {
  const [Kitchens, setKitchens] = useState([]);

  const retrieveKitchens = useCallback(async () => {
    setKitchens(await new GetUnapprovedKitchens().execute());
  }, [setKitchens]);

  useEffect(() => {
    retrieveKitchens();
  }, [retrieveKitchens]);

  return (
    <>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          {Kitchens && <KitchenList Kitchens={Kitchens}></KitchenList>}
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </>
  );
}
