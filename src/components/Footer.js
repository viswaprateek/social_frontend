import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <Box pb={3}>
      <Card>
        <Typography variant="subtitle1">
          The best way to predict the future is to create it.
        </Typography>
      </Card>
    </Box>
  );
};

export default Footer;
