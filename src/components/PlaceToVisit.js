import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import places from "../static/places";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));
export default function () {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ImageCard place={places[1]} />
      <ImageCard place={places[0]} />
      <ImageCard place={places[2]} />
      <ImageCard place={places[3]} />
    </div>
  );
}
