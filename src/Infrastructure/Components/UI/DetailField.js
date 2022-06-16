import { TextField } from "@mui/material";

export default function DetailField(props) {
  return (
    <TextField
      label={props.label}
      defaultValue={props.value}
      InputProps={{
        readOnly: true,
      }}
      style={{ marginBottom: "10px", marginRight: "20px" }}
      variant="standard"
    ></TextField>
  );
}
