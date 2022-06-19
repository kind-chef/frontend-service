import { Grid } from "@mui/material";

export default function Layout(props) {
  return (
    <Grid container style={{ marginTop: "60px", minHeight: "100vh" }}>
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        {props.children}
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
}
