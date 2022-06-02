import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { useRef } from "react";
import Login from "../../../Application/Login";

export default function LoginForm() {
  let loginInput = useRef();
  let secretInput = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(
      "submit email: ",
      loginInput.current.value,
      secretInput.current.value
    );
    const useCase = new Login();
    const result = await useCase.execute(
      loginInput.current.value,
      secretInput.current.value
    );
    console.log("this is the result ", result);
    clearform();
  };

  const clearform = () => {
    loginInput.current.value = "";
    secretInput.current.value = "";
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      spacing={0}
      alignItems="center"
      style={{ marginTop: "60px", minHeight: "100vh" }}
    >
      <Grid item style={{ textAlign: "center" }} xs={3}>
        <Card>
          <CardContent>
            <form onSubmit={submitHandler}>
              <TextField
                fullWidth
                label="Email"
                id="email"
                style={{ marginTop: "20px", marginBottom: "20px" }}
              ></TextField>
              <TextField
                fullWidth
                label="Password"
                id="secret"
                type="password"
                style={{ marginBottom: "20px" }}
              ></TextField>
              <Grid container justify="space-between" xs={12}>
                <Grid item xs={6}>
                  <Button variant="text" style={{ align: "left" }}>
                    Register
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained">Login</Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
