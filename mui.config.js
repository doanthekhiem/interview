import { createTheme } from "@mui/material";

const MuiThemeConfig = createTheme({
  palette: {
    primary: {
      main: "#46AED7", // Màu sắc chính
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
    // Cài đặt font chữ mặc định là "Montserrat"
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
          minWidth: "100px",
          "&.MuiButton-containedPrimary": {
            color: "white",
          },
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        size: "small", // Đặt size mặc định là 'small' cho OutlinedInput
      },
    },
  },
});

export default MuiThemeConfig;
