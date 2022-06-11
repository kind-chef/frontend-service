import { Grid, TextField, Stack, Button } from "@mui/material";
import { useState } from "react";
import Keywords from "./Keywords";
import ImageInput from "../UI/ImageInput";

export default function WorkshopForm() {
  const emptyWorkshop = {
    name: "",
    description: "",
    capacity: "",
    remainingCapacity: "",
    date: "",
    price: "",
    keywords: [],
    ingredients: "",
    video: "",
    images: [],
    assigned: "",
    city: "",
    postalCode: "",
    province: "",
    street: "",
  };

  const [workshop, setWorkshop] = useState(emptyWorkshop);

  const addKeywordHandler = (keyword) => {
    setWorkshop((oldValue) => ({
      ...oldValue,
      keywords: oldValue.keywords ? [...oldValue.keywords, keyword] : [keyword],
    }));
  };

  const removeKeywordHandler = (keyword) => {
    setWorkshop((oldValue) => ({
      ...oldValue,
      keywords: oldValue.filter((item) => item !== keyword),
    }));
  };

  const imageInjectorHandler = (file) => {
    let reader = new FileReader();
    reader.onload = (e) => {
      setWorkshop((workshop) => {
        return {
          ...workshop,
          images: [
            ...workshop.images,
            { name: file.name, content: e.target.result },
          ],
        };
      });
    };

    reader.readAsDataURL(file);
  };

  const clearFormHandler = () => {
    setWorkshop(emptyWorkshop);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(workshop);
  };

  return (
    <form onSubmit={submitHandler}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Name"
            variant="standard"
            onChange={(event) => {
              setWorkshop((workshop) => ({
                ...workshop,
                name: event.target.value,
              }));
            }}
            value={workshop.name}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Date"
            variant="standard"
            type="datetime-local"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(event) => {
              setWorkshop((workshop) => ({
                ...workshop,
                date: event.target.value,
              }));
            }}
            value={workshop.date}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Description"
            variant="standard"
            onChange={(event) => {
              setWorkshop((workshop) => ({
                ...workshop,
                description: event.target.value,
              }));
            }}
            value={workshop.description}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Ingredients"
            variant="standard"
            onChange={(event) => {
              setWorkshop((workshop) => ({
                ...workshop,
                ingredients: event.target.value,
              }));
            }}
            value={workshop.ingredients}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Capacity"
            type="number"
            variant="standard"
            onChange={(event) => {
              setWorkshop((workshop) => ({
                ...workshop,
                capacity: event.target.value,
              }));
            }}
            value={workshop.capacity}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Remaining Capacity"
            type="number"
            variant="standard"
            onChange={(event) => {
              setWorkshop((workshop) => ({
                ...workshop,
                remainingCapacity: event.target.value,
              }));
            }}
            value={workshop.remainingCapacity}
          ></TextField>
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Price"
            type="number"
            variant="standard"
            onChange={(event) => {
              setWorkshop((workshop) => ({
                ...workshop,
                price: event.target.value,
              }));
            }}
            value={workshop.price}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Street"
            variant="standard"
            onChange={(event) => {
              setWorkshop((workshop) => ({
                ...workshop,
                street: event.target.value,
              }));
            }}
            value={workshop.street}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Postal Code"
            variant="standard"
            onChange={(event) => {
              setWorkshop((workshop) => ({
                ...workshop,
                postalCode: event.target.value,
              }));
            }}
            value={workshop.postalCode}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="City"
            variant="standard"
            onChange={(event) => {
              setWorkshop((workshop) => ({
                ...workshop,
                city: event.target.value,
              }));
            }}
            value={workshop.city}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Province"
            variant="standard"
            onChange={(event) => {
              setWorkshop((workshop) => ({
                ...workshop,
                province: event.target.value,
              }));
            }}
            value={workshop.province}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Video URL"
            variant="standard"
            onChange={(event) => {
              setWorkshop((workshop) => ({
                ...workshop,
                video: event.target.value,
              }));
            }}
            value={workshop.video}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <Keywords
            keywords={workshop.keywords}
            onAdd={addKeywordHandler}
            onRemove={removeKeywordHandler}
          ></Keywords>
        </Grid>
        <Grid item xs={6}>
          <ImageInput onImageAdded={imageInjectorHandler}></ImageInput>
          {workshop.images.map((item) => (
            <p>{item.name}</p>
          ))}
        </Grid>
        <Grid item xs={6}></Grid>
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
  );
}
