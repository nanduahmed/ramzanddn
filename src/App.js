import React from "react";
import "./styles.css";
import { makeStyles, responsiveFontSizes } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontSize: 14
  },
  paper: {
    marginTop: 10,
    width: "100%"
  },
  img: {
    width: "100%"
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Grid container direction="row" justify="center" alignItems="center">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Ramzan 1441/2020</Typography>
            <Typography variant="h6" className={classes.title}>
              Dehradun
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper elevation={3} className={classes.paper}>
          <img
            src="https://i.ibb.co/5RFnr5Q/Ramadan-DDN.jpg"
            alt="Ramadan Dehradun Timetable"
            className={classes.img}
          />
        </Paper>
      </Grid>
    </div>
  );
}
