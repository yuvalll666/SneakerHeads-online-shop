import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((them) => ({
  root: {
    marginTop: them.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function MainContainer({ children, ...props }) {
  const styles = useStyles();

  return (
    <Container
      className={styles.root}
      component="main"
      maxWidth="xs"
      {...props}
    >
      {children}
    </Container>
  );
}

export default MainContainer;