import { createTheme } from "@mui/material";

const MuiThemeConfig = createTheme({
  palette: {
    primary: {
      main: "#924992", // Màu sắc chính
    },
    secondary: {
      main: "rgb(142, 101, 211)", // Màu sắc phụ
    },
    MuiButton: {
      defaultProps: {
        size: "small",
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },
    MuiTabs: {
      defaultProps: {
        size: "small",
      },
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#000000e0", // Default text color
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          "&.MuiChip-colorPrimary": {
            color: "white",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-containedPrimary": {
            color: "white",
          },
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        size: "small",
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: "bold",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
        },
      },
    },
  },
});

export default MuiThemeConfig;
