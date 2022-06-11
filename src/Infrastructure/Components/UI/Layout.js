import { Grid } from "@mui/material";

export default function Layout(props) {
  return (
    <Grid container style={{ marginTop: "60px", minHeight: "100vh" }}>
      <Grid xs={1}></Grid>
      <Grid xs={10}>{props.children}</Grid>
      <Grid xs={1}></Grid>
    </Grid>
  );
}
