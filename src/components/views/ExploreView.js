import { Button, Card, Container, Stack, Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getPosts } from "../../api/posts";
import { isLoggedIn } from "../../helpers/authHelper";
import CreatePost from "../CreatePost";
import GridLayout from "../GridLayout";
import Loading from "../Loading";
import Navbar from "../Navbar";
import SortBySelect from "../SortBySelect";
import PostCard from "../PostCard";
import Sidebar from "../Sidebar";
import HorizontalStack from "../util/HorizontalStack";
import PostBrowser from "../PostBrowser";

const ExploreView = () => {
  return (
    <>
      <Navbar />
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={3}>
          <Card
            sx={{
              background: 'rgba(255, 255, 255, 0.35)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderRadius: 8,
              border: '1px solid rgba(255, 255, 255, 0.18)',
              p: { xs: 1, sm: 3 },
              my: 2,
            }}
            elevation={0}
          >
            <Sidebar />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              background: 'rgba(255, 255, 255, 0.35)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderRadius: 8,
              border: '1px solid rgba(255, 255, 255, 0.18)',
              p: { xs: 1, sm: 3 },
              my: 2,
            }}
            elevation={0}
          >
            <PostBrowser createPost contentType="posts" />
          </Card>
        </Grid>
        <Grid item xs={false} md={3}>
          <Card
            sx={{
              background: 'rgba(255, 255, 255, 0.35)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderRadius: 8,
              border: '1px solid rgba(255, 255, 255, 0.18)',
              p: { xs: 1, sm: 3 },
              my: 2,
            }}
            elevation={0}
          >
            <Typography variant="h6">Suggestions</Typography>
            <Typography color="text.secondary" variant="body2">
              Coming soon: trending tags, users, etc.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ExploreView;
