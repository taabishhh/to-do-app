import * as Colors from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: Colors.deepOrange,
      ...(mode === "dark" ? { main: "#343A40" } : { main: "#CCDBFD" }),
    },
    ...(mode === "dark"
      ? {
          background: {
            default: "#212529", //Colors.blueGrey[900],
            paper: "#212529", //Colors.blueGrey[900],
          },
        }
      : {
          background: {
            default: "#EDF2FB",
            paper: "#EDF2FB ",
          },
        }),
    text: {
      ...(mode === "light"
        ? {
            primary: Colors.blueGrey[900],
            secondary: Colors.blueGrey[800],
          }
        : {
            primary: "#ffffff",
            secondary: Colors.grey[900],
          }),
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          transition: "all 1s linear",
        },
      },
    },
  },
});

// const theme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#0B2027",
//       // light: Colors.blue[300],
//       // dark: Colors.blue[900],
//     },
//     secondary: {
//       main: "#7180b9",
//       // light: Colors.pink[300],
//       // dark: Colors.pink[700],
//     },
//     error: {
//       main: Colors.red[500],
//       light: Colors.red[300],
//       dark: Colors.red[700],
//     },
//     background: {
//       default: "#222222",
//     },
//   },
// });

// A custom theme for this app
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#6E8387",
//     },
//     secondary: {
//       main: "#198ff7b",
//     },
//     error: {
//       main: red.A400,
//     },
//     background: {
//       default: "#C8D3D5",
//     },
//   },
// });

// const theme = React.memo(() => createTheme(getDesignTokens(mode)), [mode]);

export default getDesignTokens;
