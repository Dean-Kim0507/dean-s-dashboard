import { createTheme } from "@mui/material/styles";

// assets
import colors from "../assets/scss/_themes-vars.module.scss";

// project imports
import themePalette from "./palette";
import themeTypography from "./typography";

export const theme = () => {
  const color = colors;

  const themeOption = {
    colors: color,
    paper: color.paper,
    heading: color.grey900,
    backgroundDefault: color.paper,
    background: color.primaryLight,
    darkTextPrimary: color.grey700,
    darkTextSecondary: color.grey500,
    textDark: color.grey900,
    menuSelected: color.secondaryDark,
    menuSelectedBack: color.secondaryLight,
    divider: color.grey200,
  };

  const themeOptions = {
    direction: "ltr",
    palette: themePalette(themeOption),
    typography: themeTypography(themeOption),
  };

  const themes = createTheme(themeOptions);
  return themes;
};

export default theme;
