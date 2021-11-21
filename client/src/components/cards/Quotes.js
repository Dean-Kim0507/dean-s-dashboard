import React, { useState } from "react";
import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  LinearProgress,
  Backdrop,
  Modal,
  Fade,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MonetizationOnIcon } from "../../assets/icons";
import Title from "./Title";
import { connect } from "react-redux";
import { formatPhoneNumber } from "../utils/phoneNumberFormatting";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: "4px",
  },
  textBox: {
    display: "block",
  },
  listItem: {
    width: "100%",
  },
  containerBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "320px",
    backgroundColor: theme.palette.background.paper,
    border: `2px solid ${theme.palette.primary.main}`,
    boxShadow: "24",
    padding: "32px",
    borderRadius: "10px",
  },
}));

const Quotes = (props) => {
  const { quotes } = props.quotes;
  const classes = useStyles();
  const [currentQuote, setCurrentQuote] = useState();
  const [open, setOpen] = useState(false);

  //Skeleton
  if (!quotes) {
    return (
      <Box sx={{ width: "100%", height: "10rem" }}>
        <LinearProgress />
      </Box>
    );
  }
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onClick = (e) => {
    setCurrentQuote(
      quotes.filter((quote) => String(quote.id) === e.currentTarget.id)[0]
    );
    handleOpen();
  };

  //Telephone number formatting

  return (
    <React.Fragment>
      {quotes && (
        <>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Title>Recent Quotes</Title>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Depature Date</TableCell>
                  <TableCell>Departure</TableCell>
                  <TableCell>Return Date</TableCell>
                  <TableCell>Destination</TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {quotes.map((row) => (
                  <TableRow
                    key={row.id}
                    id={row.id}
                    onClick={onClick}
                    sx={{ cursor: "pointer" }}
                    hover={true}
                    selected={true}
                  >
                    <TableCell>{row.user.name}</TableCell>
                    <TableCell>{row.depatureDate}</TableCell>
                    <TableCell>{row.from.name}</TableCell>
                    <TableCell>{row.returnDate}</TableCell>
                    <TableCell>{row.dest.name}</TableCell>
                    <TableCell align="right">{`$${row.price.toLocaleString(
                      "en-CA"
                    )}`}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Link color="primary" href="#" sx={{ mt: 3 }}>
              See more quotes
            </Link>
          </Box>
          {/* ========Mobile============ */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Title>Recent Quotes</Title>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Destination</TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {quotes.map((row) => (
                  <TableRow
                    key={row.id}
                    id={row.id}
                    onClick={onClick}
                    sx={{ cursor: "pointer" }}
                    hover={true}
                    selected={true}
                  >
                    <TableCell>{row.user.name}</TableCell>
                    <TableCell>{row.dest.name}</TableCell>
                    <TableCell align="right">{`$${row.price.toLocaleString(
                      "en-CA"
                    )}`}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Link color="primary" href="#" sx={{ mt: 3 }}>
              See more quotes
            </Link>
          </Box>
          {/* ============Modal============ */}
          {currentQuote && (
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box className={classes.containerBox}>
                  <Typography
                    id="transition-modal-title"
                    variant="h3"
                    component="h3"
                  >
                    {`Quote for ${currentQuote.user.name}`}
                  </Typography>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                  >
                    <ListItem className={classes.listItem}>
                      <Box className={classes.textBox}>
                        <ListItemText primary="Depature" />
                        <Typography
                          variant="h4"
                          component="h4"
                          className={classes.text}
                        >
                          {currentQuote.depatureDate}
                        </Typography>
                        <Typography
                          variant="h4"
                          component="h4"
                          className={classes.text}
                        >
                          {currentQuote.from.name}
                        </Typography>
                      </Box>
                      <Box sx={{ flexGrow: 1 }} />
                      <Box className={classes.textBox}>
                        <ListItemText primary="Return" />
                        <Typography
                          variant="h4"
                          component="h4"
                          className={classes.text}
                        >
                          {currentQuote.returnDate}
                        </Typography>
                        <Typography
                          variant="h4"
                          component="h4"
                          className={classes.text}
                        >
                          {currentQuote.dest.name}
                        </Typography>
                      </Box>
                    </ListItem>
                    <Divider />
                    <ListItem className={classes.listItem}>
                      <ListItemText primary="Name" />
                      <Typography variant="h4" component="h4">
                        {currentQuote.user.name}
                      </Typography>
                    </ListItem>
                    <Divider />
                    <ListItem className={classes.listItem}>
                      <ListItemText primary="Travelers" />
                      <Typography variant="h4" component="h4">
                        {currentQuote.user.people}
                      </Typography>
                    </ListItem>
                    <Divider />
                    <ListItem className={classes.listItem}>
                      <ListItemText primary="Contact Info" />
                      <Typography variant="h4" component="h4">
                        {formatPhoneNumber(currentQuote.user.contactInfo)}
                      </Typography>
                    </ListItem>
                    <Divider />
                    <ListItem className={classes.listItem}>
                      <ListItemText primary="Transportation" />
                      <Typography variant="h4" component="h4">
                        {currentQuote.transportation.type}
                      </Typography>
                    </ListItem>
                    <Divider variant="inset" />
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <MonetizationOnIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Price" />
                      <Typography variant="h4" component="h4">
                        {`CAD$ ${currentQuote.price.toLocaleString("en-CA")}`}
                      </Typography>
                    </ListItem>
                  </List>
                </Box>
              </Fade>
            </Modal>
          )}
        </>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes,
  };
};

export default connect(mapStateToProps, null)(Quotes);
