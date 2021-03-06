import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { useMediaQuery } from "react-responsive";
import SideNav from "./SideNav";
import { makeStyles } from "@mui/styles";
import { ipad } from "../../../assets/deviceSize";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  MenuItem,
  Menu,
} from "@mui/material";
import {
  SearchIcon,
  AccountCircle,
  ChatBubbleIcon,
  DashboardIcon,
  NotificationsIcon,
  MoreIcon,
  SettingsIcon,
} from "../../../assets/icons";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[300],
  "&:hover": {
    backgroundColor: theme.palette.grey[300],
  },
  marginRight: theme.spacing(0),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.icon.grey,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  navTop: {
    backgroundColor: theme.palette.headerBackground.primary,
    width: "100%",
  },
}));

const Nav = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [open, setOpen] = useState(
    useMediaQuery({ maxWidth: ipad }) ? false : true
  );

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const toggleDrawer = (e) => {
    setOpen(!open);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show new notifications"
          color="inherit"
        >
          <Badge badgeContent={0} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show new mails" color="inherit">
          <Badge badgeContent={0} color="error">
            <ChatBubbleIcon />
          </Badge>
        </IconButton>
        <p>Chat</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show settings" color="inherit">
          <Badge badgeContent={0} color="error">
            <SettingsIcon />
          </Badge>
        </IconButton>
        <p>Chat</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" className={classes.navTop} enableColorOnDark>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <DashboardIcon />
          </IconButton>
          <Typography
            variant="badge"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Dean's
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Search sx={{ mr: 4 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase inputProps={{ "aria-label": "search" }} />
          </Search>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show new notifications"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show new mails"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <Badge badgeContent={0} color="error">
                <ChatBubbleIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show settings"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <Badge badgeContent={0} color="error">
                <SettingsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{ mr: 2 }}
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box
            className={classes.mobileBox}
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          >
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <SideNav open={open} />
    </Box>
  );
};

export default Nav;
