import { Grid, TextField } from "@mui/material";
import Layout from "../Components/UI/Layout";
import { useState } from "react";
import ImageInput from "../Components/UI/ImageInput";
export default function RegisterKitchen() {
  const [kitchen, setKitchen] = useState({ images: [], imageNames: [] });

  const imageInjectorHandler = (file) => {
    let reader = new FileReader();
    setKitchen((kitchen) => ({
      ...kitchen,
      imageNames: [...kitchen.imageNames, file.name],
    }));
    reader.onload = (e) => {
      setKitchen((kitchen) => {
        return {
          ...kitchen,
          images: [...kitchen.images, e.target.result],
          imageNames: [...kitchen.imageNames, e.target.name],
        };
      });
    };
    reader.readAsDataURL(file);
  };
  return (
    <Layout>
      <h1>This is the register kitchen form</h1>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField fullWidth label="Name" variant="standard"></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Email" variant="standard"></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Phone" variant="standard"></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Capacity" variant="standard"></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Street" variant="standard"></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="PostalCode"
            variant="standard"
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="City" variant="standard"></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Province" variant="standard"></TextField>
        </Grid>
        <Grid item xs={6}>
          {kitchen.imageNames}
          <ImageInput onImageAdded={imageInjectorHandler}></ImageInput>
        </Grid>
      </Grid>
    </Layout>
  );
}
