import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Collapse } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#5AFF3D",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#5AFF3D",
    fontSize: "2.5rem",
  },
  titledown: {
    color: "#fff",
    fontSize: "2rem",
    fontFamily: "light",
  },
  goDown: {
    color: "#5AFF3D",
    fontSize: "4rem",
  },
}));
export default function Support() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            Farmer's<span className={classes.colorText}>Xchange</span>
          </h1>
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1500 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            <br />
            Contact us :{" "}
            <span className={classes.colorText}> soumadeep.netlify.app</span>
          </h1>
          <br />
          <br />
          <br />
          <br />
          <h3 className={classes.titledown}>
            Toll Free Number : 1800-102-1111/2222{" "}
          </h3>
        </div>
      </Collapse>
    </div>
  );
}
