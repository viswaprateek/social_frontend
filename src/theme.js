import { createTheme } from "@mui/material";
import bg1 from "./assets/bg2.jpg"; // Assuming bg2.jpg is still named bg1 in your assets

const theme = createTheme({
  palette: {
    palette: {
      mode: "light",
      background: {
        default: "#C8A2C8",
        paper: "#DDA0DD",
      },
      primary: {
        main: "#000000",
        contrastText: "#000000",
      },
      secondary: {
        main: "#FF99CC", // ← updated to a soft blush pink
        contrastText: "#ffffff",
      },
      text: {
        primary: "#200040",
        secondary: "#3D0060",
        light: "#FFE8B0",
      },
    },
    
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        },
      },
    },
    MuiCard: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(2),
          borderWidth: "1.5px",
          // Card background now uses the light violet paper color
          backgroundColor: theme.palette.background.paper, // A slightly rosier, light violet
          // Border color changed to the new light primary for a consistent feel
          borderColor: theme.palette.primary.main, // Calming, medium-light lavender/violet border
          boxShadow: `0px 4px 20px rgba(0, 0, 0, 0.1)`, // Reduced shadow for a lighter feel
        }),
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
      styleOverrides: {
        root: {
          // You might want to add some padding to the container to prevent content from touching edges
          // paddingTop: '20px',
          // paddingBottom: '20px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 8,
          '&.MuiButton-containedPrimary': {
            backgroundColor: theme.palette.primary.main, // Light Violet
            color: theme.palette.primary.contrastText, // Dark text on light button
            '&:hover': {
              backgroundColor: "#A08ABF", // Slightly darker light violet on hover
            },
          },
          '&.MuiButton-containedSecondary': {
            backgroundColor: theme.palette.secondary.main, // Bright Magenta (remains vibrant)
            color: theme.palette.secondary.contrastText, // White
            '&:hover': {
              backgroundColor: "#CC0066", // Slightly darker secondary on hover
            },
          },
          '&.MuiButton-outlinedPrimary': {
            color: theme.palette.primary.main, // Light Violet text
            borderColor: theme.palette.primary.main, // Light Violet border
            '&:hover': {
              backgroundColor: "rgba(179, 156, 208, 0.04)", // Light hover effect for primary
            },
          },
          '&.MuiButton-outlinedSecondary': {
            color: theme.palette.secondary.main, // Bright Magenta text
            borderColor: theme.palette.secondary.main, // Bright Magenta border
            '&:hover': {
              backgroundColor: "rgba(255, 0, 128, 0.04)", // Light hover effect for secondary
            },
          },
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ theme }) => ({
          // Default Typography will now use the dark primary text color for readability
          color: theme.palette.text.primary,
        }),
      },
    },
  },
});

export default theme;