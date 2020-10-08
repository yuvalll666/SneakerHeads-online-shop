import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((them) => ({
  root: {
    margin: them.spacing(3, 0, 2),
  },
}));

function PrimaryButton({ children, ...props }) {
  const styles = useStyles();

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={styles.root}
      {...props}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;
