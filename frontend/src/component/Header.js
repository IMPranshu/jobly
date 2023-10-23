import { Box, styled } from "@mui/material";
import React from "react";
import headerImage from "../images/jobs.jpeg";

const Header = () => {
  const StyleHeader = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    minHeight: 300,
    backgroundImage: `url(${headerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: theme.palette.secondary.main,
  }));
  return (
    <>
      <StyleHeader></StyleHeader>
    </>
  );
};

export default Header;
