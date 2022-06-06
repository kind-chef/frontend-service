import { Typography, Divider } from "@mui/material";

export default function DetailSection(props) {
  return (
    <>
      <Typography gutterBottom variant="h4" component="div">
        {props.title}
      </Typography>
      <div>{props.children}</div>
      <Divider style={{ marginTop: "30px", marginBottom: "30px" }} />
    </>
  );
}
