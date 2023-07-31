import React from "react";
import { Box, Stack, Typography } from "@mui/material";
// import Logo from '../assets/images/Logo-1.png';
import Logo from "../assets/images/Logo.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4" padding={4}>
    <Stack direction='row' alignItems="center" justifyContent="center" spacing={2}>
      <img
        src={Logo}
        alt="logo"
        style={{ width: "40px", height: "40px"}}
      />
      <Typography variant="h4" fontWeight="700" textAlign="center">
        Muscles Factory
      </Typography>
    </Stack>

    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
    >
      Made with ❤️ by Ahmed Reza
    </Typography>
  </Box>
);

export default Footer;
