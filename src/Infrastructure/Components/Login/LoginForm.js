import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useRef } from "react";
import Login from "../../../Application/Login";
import "./LoginForm.css";

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
      xs={12}
    >
      <Grid item style={{ textAlign: "center" }}>
        <Card>
          <CardContent>
            <form onSubmit={submitHandler}>
              <Box width={350} className="login-form__email-input">
                <TextField fullWidth label="Email" id="email"></TextField>
              </Box>
              <Box width={350} className="login-form__email-input">
                <TextField
                  fullWidth
                  label="Password"
                  id="secret"
                  type="password"
                ></TextField>
              </Box>
              <Grid container justify="space-between" xs={12}>
                <Grid item xs={6}>
                  <Button variant="text">Register</Button>
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
