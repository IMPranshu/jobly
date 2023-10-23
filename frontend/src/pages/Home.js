import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import Navbar from "../component/Navbar";
import Header from "../component/Header";
import CardElement from "../component/CardElement";

import {
  Box,
  Card,
  Container,
  ListItemIcon,
  MenuItem,
  MenuList,
  Pagination,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import { jobLoadAction } from "../redux/actions/jobAction";

const Home = () => {
  const { jobs, setUniqueLocation, pages, loading } = useSelector(
    (state) => state.loadJobs
  );

  const { palette } = useTheme();
  const dispatch = useDispatch();

  const { keyword, location } = useParams();

  const [page, setPage] = useState(1);
  const [cat, setCat] = React.useState("");

  useEffect(() => {
    dispatch(jobLoadAction(page, keyword, cat, location));
  }, [page, keyword, cat, location]);

  const handleChangeCategory = (e) => {
    setCat(e.target.value);
  };
  return (
    <>
      <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
        <Navbar />
        <Header />
        <Container>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Box sx={{ flex: 2, p: 2 }}>
              <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                <Box sx={{ pb: 2 }}>
                  <Typography
                    component="h4"
                    sx={{
                      color: palette.secondary.contrastText,
                      fontWeight: 600,
                    }}
                  >
                    Filter job by category
                  </Typography>
                </Box>
              </Card>
            </Box>
            <Box sx={{ flex: 5, p: 2 }}>
              {jobs &&
                jobs.map((job, i) => (
                  <CardElement
                    key={i}
                    id={job._id}
                    jobTitle={job.title}
                    description={job.description}
                    category={
                      job.jobType ? job.jobType.jobTypeName : "No category"
                    }
                    location={job.location}
                  />
                ))}
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Home;
