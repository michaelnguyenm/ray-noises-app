import React from "react";
import { Grid, Box, CircularProgress } from "@material-ui/core";

function LoadingSpinner() {
  return (
    <Grid container justify="center">
      <Box py={6}>
        <CircularProgress size="5rem" thickness={3} />
      </Box>
    </Grid>
  );
}

export default LoadingSpinner;
