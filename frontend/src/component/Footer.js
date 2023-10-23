import { Box, Link } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const { palette } = useTheme();
  return (
    <>
      <Box
        sx={{
          height: "70px",
          bgcolor: palette.secondary.midNightBlue,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box component="span" sx={{ color: palette.primary.contrastText }}>
          All rights reserved! 2023
          <Link
            href="https://github.com/IMPranshu"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "inherit" }}
          >
            @IMPranshu
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
