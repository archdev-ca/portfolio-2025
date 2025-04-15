import { createTheme } from "@mui/material";
import { deepPurple, purple } from "@mui/material/colors";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    link: true;
  }
}

export const TuxTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      dark: deepPurple[700],
      main: deepPurple[500],
      light: deepPurple[200],
    },
  },
  components: {
    MuiTouchRipple: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: "link" },
              style: () => {
                return {
                  display: "none",
                };
              },
            },
          ],
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          variants: [
            {
              props: { variant: "link" },
              style: ({ theme }) => {
                return {
                  color: theme.palette.primary.main,
                  "&:hover": {
                    color: theme.palette.primary.dark,
                  },
                  ".MuiTouchRipple-root": {
                    display: "none",
                  },
                };
              },
            },
            {
              props: { variant: "link", size: "small" },
              style: ({ theme }) => {
                return {
                  fontSize: "0.8125rem",
                  color: theme.palette.primary.main,
                  "&:hover": {
                    color: theme.palette.primary.dark,
                  },
                  ".MuiTouchRipple-root": {
                    display: "none",
                  },
                };
              },
            },
          ],
        },
      },
      defaultProps: {
        disableElevation: true,
        variant: "contained",
      },
    },
    MuiButtonBase: {
      defaultProps: {
        // disableRipple: true,
      },
    },
  },
});

export default TuxTheme;
