import React from "react";
import Avatar from "@mui/material/Avatar";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Lock } from "@mui/icons-material";
import * as Colors from "@mui/material/colors";
import { useTheme, ThemeProvider } from "@mui/material/styles";
import { FormGroup } from "@mui/material";
// import theme from "../theme";

export default function Login(props) {
  const [errorMessage, setErrorMessage] = React.useState("");

  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.primary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  const login_function = async (event) => {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const result = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => {
      res.text().then(async (text) => {
        const body = await JSON.parse(text);
        if (res.status === 200) {
          alert("Successfully registered!");
          // window.open("/home");    //opens in new tab
          window.location.href = "/home"; //opens in same tab
        } else {
          setErrorMessage(body["message"]);
          setTimeout(function () {
            setErrorMessage("");
          }, 5000);
        }
      });
    });

    console.log(result);
  };

  const theme = useTheme();
  // const colorMode = React.useContext(ColorModeContext);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          bgcolor: "primary.main", //Colors.blueGrey[900],
          borderRadius: "10px",
          // borderWidth: "2px",
          // border: "solid",
          borderColor: "secondary.main",
          marginTop: 15,
          maxWidth: "90%",
          // mx: "auto",
          p: 5,
        }}
      >
        {/* <CssBaseline /> */}
        <Box
          sx={{
            // marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar> */}

          <Typography
            component="h1"
            variant="h5"
            sx={{ color: "text.primary", m: 1 }}
          >
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={login_function}
            noValidate
            sx={{ mt: 1 }}
          >
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color: "text.primary", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                fullWidth
                label="Login"
                InputLabelProps={{
                  sx: { color: "text.primary" },
                }}
                variant="standard"
                inputProps={{
                  sx: { color: "text.primary", borderBottomColor: "white" },
                }}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <Lock sx={{ color: "text.primary", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                type="password"
                fullWidth
                label="Password"
                InputLabelProps={{
                  sx: { color: "text.primary", borderColor: "white" },
                }}
                // InputLabelProps={{
                //   style: { color: "text.primary" },
                // }}
                variant="standard"
                inputProps={{
                  sx: {
                    color: "text.primary",
                    borderBottomColor: "white",
                  },
                }}
              />
            </Box>

            <FormControlLabel
              control={
                <Checkbox
                  // value="remember"
                  sx={{
                    color: "text.primary",
                    "&.Mui-checked": {
                      color: "text.primary",
                    },
                  }}
                />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{
                mt: 3,
                mb: 2,
                color: "text.primary",
                borderColor: "text.primary",
                ":hover": {
                  bgcolor: "grey",
                  color: "white",
                  borderColor: "white",
                },
              }}
              color="primary"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright />
      </Container>
    </ThemeProvider>
    // </ParticlesBackground>

    // <div className="auth-inner">
    //   <form className="form" onSubmit={login_function}>
    //     <h3>Login</h3>

    //     <div className="mb-3">
    //       <label className="label-text">Email address*</label>
    //       <input
    //         type="email"
    //         className="form-control"
    //         placeholder="Enter email"
    //         id="login-email"
    //         required="true"
    //       />
    //     </div>

    //     <div className="mb-3">
    //       <label className="label-text">Password*</label>
    //       <input
    //         type="password"
    //         className="form-control"
    //         placeholder="Enter password"
    //         id="login-password"
    //         required="true"
    //       />
    //     </div>

    //     <div className="mb-3">
    //       <div className="custom-control custom-checkbox">
    //         <input
    //           type="checkbox"
    //           className="custom-control-input"
    //           id="customCheck1"
    //         />
    //         <label className="custom-control-label" htmlFor="customCheck1">
    //           Remember me
    //         </label>
    //       </div>
    //     </div>

    //     <div className="d-grid">
    //       <button
    //         type="submit"
    //         className="btn btn-primary"
    //         onClick={login_function}
    //       >
    //         Submit
    //       </button>
    //     </div>
    //     {errorMessage && <p className="error"> {errorMessage} </p>}
    //     <p className="forgot-password text-right">
    //       <a href="#">Forgot password?</a>
    //     </p>
    //   </form>
    // </div>
  );
}
