import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import CssBaseline from "@mui/material/CssBaseline";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import ParticlesBackground from "./components/partcilesBackground";
import getDesignTokens from "./theme";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const ButtonAppBar = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    // <Box sx={{ flexGrow: 1 }}>

    <AppBar sx={{ bgcolor: "primary.main" }}>
      {/* color="primary"> */}

      <Toolbar>
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          // alt="The house from the offer."
          src="https://e1.pngegg.com/pngimages/361/531/png-clipart-clay-os-6-a-macos-icon-todo-blue-and-white-check-icon-art.png"
        />
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyToDo
        </Typography>
        <Box
          sx={{
            display: "flex",
            // width: "100%",
            alignItems: "center",
            justifyContent: "center",
            color: "text.primary",
            borderRadius: 1,
            p: 3,
          }}
        >
          {/* {theme.palette.mode} mode */}
          {/* <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          > */}
          {/* {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon sx={{ color: "yellow" }} />
            )} */}
          <DarkModeSwitch
            // style={{ marginBottom: "2rem" }}
            checked={theme.palette.mode === "dark" ? true : false}
            onChange={colorMode.toggleColorMode}
            size={22}
          />
          {/* </IconButton> */}
        </Box>
        <Button>
          <Link
            style={{ textDecoration: "none" }}
            // className="nav-link"
            to={"/sign-in"}
            isActive="false"
          >
            <Typography
              component="h1"
              // variant="h5"
              sx={{ color: "text.primary", m: 1 }}
            >
              Login
            </Typography>
          </Link>
        </Button>
        <Button>
          <Link
            style={{}}
            // className="nav-link"
            to={"/sign-up"}
            isActive="false"
          >
            {" "}
            <Typography
              component="h1"
              // variant="h5"
              sx={{ color: "text.primary", m: 1 }}
            >
              Register
            </Typography>
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default function App() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  // const theme = React.useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode,
  //       },
  //     }),
  //   [mode]
  // );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router sx={{ bgColor: "background.default" }}>
          <ButtonAppBar />
          <ParticlesBackground />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<Register />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

// function App() {
//   return (
//     // <ColorModeContext.Provider value={colorMode}>
//     //   <ThemeProvider theme={theme}>
//     <Router sx={{ bgcolor: "background.default" }}>
//       <ButtonAppBar theme={theme} colorMode={colorMode} />
//       <ParticlesBackground />
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route path="/sign-in" element={<Login />} />
//         <Route path="/sign-up" element={<Register />} />
//         <Route path="/home" element={<Home />} />
//       </Routes>
//     </Router>
//     //   </ThemeProvider>
//     // </ColorModeContext.Provider>
//   );
// }

// export default App;
