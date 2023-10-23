import { createTheme } from "@mui/material/styles";
import { blue, lightBlue } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[900],
    },
    secondary: {
      main: lightBlue[100],
      midNightBlue: "#003366",
    },
  },
});
