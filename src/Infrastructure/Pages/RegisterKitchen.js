import { Grid, TextField, Stack, Button } from "@mui/material";
import Layout from "../Components/UI/Layout";
import { useState } from "react";
import ImageInput from "../Components/UI/ImageInput";
export default function RegisterKitchen() {
  const emptyKitchen = {
    name: "",
    email: "",
    phone: "",
    capacity: "",
    street: "",
    postalCode: "",
    city: "",
    province: "",
    images: [],
    imageNames: [],
  };

  const [kitchen, setKitchen] = useState(emptyKitchen);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(kitchen);
  };

  const clearFormHandler = () => setKitchen(emptyKitchen);

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
      <form onSubmit={submitHandler}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Name"
              variant="standard"
              onChange={(event) => {
                setKitchen((kitchen) => ({
                  ...kitchen,
                  name: event.target.value,
                }));
              }}
              value={kitchen.name}
            ></TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Email"
              variant="standard"
              onChange={(event) => {
                setKitchen((kitchen) => ({
                  ...kitchen,
                  email: event.target.value,
                }));
              }}
              value={kitchen.email}
            ></TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Phone"
              value={kitchen.phone}
              variant="standard"
              onChange={(event) => {
                setKitchen((kitchen) => ({
                  ...kitchen,
                  phone: event.target.value,
                }));
              }}
            ></TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Capacity"
              value={kitchen.capacity}
              variant="standard"
              onChange={(event) => {
                setKitchen((kitchen) => ({
                  ...kitchen,
                  capacity: event.target.value,
                }));
              }}
            ></TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Street"
              value={kitchen.street}
              variant="standard"
              onChange={(event) => {
                setKitchen((kitchen) => ({
                  ...kitchen,
                  street: event.target.value,
                }));
              }}
            ></TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="PostalCode"
              value={kitchen.postalCode}
              variant="standard"
              onChange={(event) => {
                setKitchen((kitchen) => ({
                  ...kitchen,
                  postalCode: event.target.value,
                }));
              }}
            ></TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="City"
              value={kitchen.city}
              variant="standard"
              onChange={(event) => {
                setKitchen((kitchen) => ({
                  ...kitchen,
                  city: event.target.value,
                }));
              }}
            ></TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Province"
              variant="standard"
              value={kitchen.province}
              onChange={(event) => {
                setKitchen((kitchen) => ({
                  ...kitchen,
                  province: event.target.value,
                }));
              }}
            ></TextField>
          </Grid>
          <Grid item xs={6}>
            {kitchen.imageNames.map((name) => (
              <p>{name}</p>
            ))}
            <ImageInput onImageAdded={imageInjectorHandler}></ImageInput>
          </Grid>
          <Grid item xs={6}>
            <Stack
              direction="row"
              style={{ marginTop: "60px" }}
              justifyContent="flex-end"
              alignItems="center"
              spacing={10}
            >
              <Button variant="outlined" onClick={clearFormHandler}>
                Cancel
              </Button>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </Layout>
  );
}
