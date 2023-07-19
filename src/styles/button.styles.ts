import { createStyles } from "@mantine/core";
import { theme } from "./theme";

export const useButtonStyles = createStyles({
  button: {
    backgroundColor: theme.colors.dark[0],
    color: theme.colors.white[0],
    borderRadius: "12px",
    width: "343px",
    height: "44px",
    boxShadow: `0px 4px ${theme.colors.white[3]}`,
    fontFamily: "Roboto, sans-serif",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: theme.colors.red[0],
    },
  },
  searchButton: {
    backgroundColor: theme.colors.white[1],
    color: theme.colors.white[0],
    borderRadius: "34px",
    width: "48px",
    height: "48px",
    boxShadow: `0px 2px ${theme.colors.white[3]}`,
    padding: "12px",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: theme.colors.white[2],
    },
  },
});
