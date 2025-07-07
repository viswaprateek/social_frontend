import { useTheme } from "@emotion/react";
import {
  IconButton,
  Stack,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import "react-icons/ai";
import {
  AiFillFileText,
  AiFillHome,
  AiFillMessage,
  AiOutlineSearch,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, logoutUser } from "../helpers/authHelper";
import UserAvatar from "./UserAvatar";
import HorizontalStack from "./util/HorizontalStack";
import { FaCat } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const user = isLoggedIn();
  const theme = useTheme();
  const username = user && isLoggedIn().username;
  const [search, setSearch] = useState("");
  const [searchIcon, setSearchIcon] = useState(false);
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const mobile = width < 500;
  const navbarWidth = width < 600;

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const handleLogout = async (e) => {
    logoutUser();
    navigate("/login");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search?" + new URLSearchParams({ search }));
  };

  const handleSearchIcon = (e) => {
    setSearchIcon(!searchIcon);
  };

  return (
    <Stack mb={2}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          mx: 2,
          pt: 2,
          pb: 1,
          px: 3,
          borderRadius: 20,
          background: 'rgba(255, 255, 255, 0.25)',
          boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.15)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          transition: 'background 0.3s',
        }}
        spacing={!mobile ? 2 : 0}
      >
        <HorizontalStack>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.1) rotate(-8deg)',
                filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))',
              },
            }}
            onClick={() => navigate("/")}
          >
            <FaCat
              size={33}
              color={theme.palette.primary.contrastText}
            />
          </Box>
          <Typography
            sx={{ display: mobile ? "none" : "block" }}
            variant={navbarWidth ? "h6" : "h4"}
            mr={1}
            color={theme.palette.primary.contrastText}
          >
            {/* <Link to="/" color="inherit"> */}
              Daily Dose
            {/* </Link> */}
          </Typography>
        </HorizontalStack>

        {!navbarWidth && (
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              size="small"
              label="Search for posts..."
              sx={{ flexGrow: 1, maxWidth: 300 }}
              onChange={handleChange}
              value={search}
            />
          </Box>
        )}

        <HorizontalStack>
          {mobile && (
            <IconButton onClick={handleSearchIcon}>
              <AiOutlineSearch />
            </IconButton>
          )}

          <IconButton component={Link} to={"/"}>
            <AiFillHome />
          </IconButton>
          {user ? (
            <>
              <IconButton component={Link} to={"/messenger"}>
                <AiFillMessage />
              </IconButton>
              <IconButton component={Link}  to={"/users/" + username}>
                <UserAvatar width={30} height={30} username={user.username} />
              </IconButton>
              <Button onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Button variant="text" sx={{ minWidth: 80 }} href="/signup">
                Sign Up
              </Button>
              <Button variant="text" sx={{ minWidth: 65 }} href="/login">
                Login
              </Button>
            </>
          )}
        </HorizontalStack>
      </Stack>
      {navbarWidth && searchIcon && (
        <Box component="form" onSubmit={handleSubmit} mt={2}>
          <TextField
            size="small"
            label="Search for posts..."
            fullWidth
            onChange={handleChange}
            value={search}
          />
        </Box>
      )}
    </Stack>
  );
};

export default Navbar;
