import React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { List, Divider, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { mainListItems, secondaryListItems, thirdListItems } from "./ListItems";
const drawerWidth = 200;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    backgroundColor: theme.palette.grey[300],
    color: theme.palette.primary.main,
    zIndex: "0",
    // top: "20rem",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(8),
      },
    }),
  },
}));

const useStyles = makeStyles((theme) => ({
  icons: {
    color: theme.palette.icon.primary,
  },
  item: {
    height: "4rem",
  },
  text: {
    fontWeight: "bold",
  },
}));

const SideNav = (props) => {
  const classes = useStyles();
  return (
    <Drawer variant="permanent" open={props.open}>
      <Toolbar />
      <List>{mainListItems(classes)}</List>
      <Divider />
      <List>{secondaryListItems(classes)}</List>
      <Divider />
      {props.open && (
        <>
          <List>{thirdListItems()}</List>
        </>
      )}
    </Drawer>
  );
};

export default SideNav;
