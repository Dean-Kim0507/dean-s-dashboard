import * as React from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  HomeIcon,
  PeopleIcon,
  AttachMoneyIcon,
  ArticleIcon,
  AirplanemodeActiveIcon,
  ReceiptIcon,
  AssessmentIcon,
  SettingsIcon,
  SupportIcon,
} from "../../../assets/icons";

export const mainListItems = (classes) => {
  return (
    <div>
      <ListItemButton
        onClick={() => (window.location.href = "/")}
        className={classes.item}
      >
        <ListItemIcon className={classes.icons}>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText
          primary="Home"
          primaryTypographyProps={{
            fontWeight: "bold",
          }}
        />
      </ListItemButton>
      <ListItemButton className={classes.item}>
        <ListItemIcon className={classes.icons}>
          <AttachMoneyIcon />
        </ListItemIcon>
        <ListItemText
          primary="Quotes"
          primaryTypographyProps={{
            fontWeight: "bold",
          }}
        />
      </ListItemButton>
      <ListItemButton className={classes.item}>
        <ListItemIcon className={classes.icons}>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText
          primary="Leads"
          primaryTypographyProps={{
            fontWeight: "bold",
          }}
        />
      </ListItemButton>
      <ListItemButton className={classes.item}>
        <ListItemIcon className={classes.icons}>
          <AirplanemodeActiveIcon />
        </ListItemIcon>
        <ListItemText
          primary="Tours"
          primaryTypographyProps={{
            fontWeight: "bold",
          }}
        />
      </ListItemButton>
    </div>
  );
};

export const secondaryListItems = (classes) => {
  return (
    <div>
      <ListItemButton className={classes.item}>
        <ListItemIcon className={classes.icons}>
          <ReceiptIcon />
        </ListItemIcon>
        <ListItemText
          primary="Invocies"
          primaryTypographyProps={{
            fontWeight: "bold",
          }}
        />
      </ListItemButton>
      <ListItemButton className={classes.item}>
        <ListItemIcon className={classes.icons}>
          <AssessmentIcon />
        </ListItemIcon>
        <ListItemText
          primary="Analytics"
          primaryTypographyProps={{
            fontWeight: "bold",
          }}
        />
      </ListItemButton>
      <ListItemButton className={classes.item}>
        <ListItemIcon className={classes.icons}>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText
          primary="Team"
          primaryTypographyProps={{
            fontWeight: "bold",
          }}
        />
      </ListItemButton>
      <ListItemButton className={classes.item}>
        <ListItemIcon className={classes.icons}>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText
          primary="Admin"
          primaryTypographyProps={{
            fontWeight: "bold",
          }}
        />
      </ListItemButton>
      <ListItemButton className={classes.item}>
        <ListItemIcon className={classes.icons}>
          <SupportIcon />
        </ListItemIcon>
        <ListItemText
          primary="Support"
          primaryTypographyProps={{
            fontWeight: "bold",
          }}
        />
      </ListItemButton>
    </div>
  );
};

export const thirdListItems = () => {
  return (
    <div>
      <Typography variant="body2" color="text.secondary" align="center">
        <p>Allright received</p> <p> by wetbat 2020*</p>
      </Typography>
    </div>
  );
};
