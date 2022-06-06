import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Button, styled } from "@mui/material";

export default function ImageInput(props) {
  const Input = styled("input")({
    display: "none",
  });

  const imagePushHandler = (event) => {
    props.onImageAdded(event.target.files[0]);
  };
  return (
    <label htmlFor="contained-button-file">
      <Input
        accept="image/*"
        id="contained-button-file"
        type="file"
        onChange={imagePushHandler}
      />
      <Button variant="outlined" startIcon={<PhotoCamera />} component="span">
        Add image
      </Button>
    </label>
  );
}
