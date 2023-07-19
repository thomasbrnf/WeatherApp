import { createStyles } from "@mantine/core";
import { theme } from "./theme";

const commonInputStyles = {
  backgroundColor: theme.colors.white[1],
  fontFamily: "Roboto, sans-serif",
  fontStyle: "normal",
  fontSize: "18px",
  borderRadius: "12px",
  border: "none",
};

export const useInputStyles = createStyles({
  textInput: {
    input: {
      ...commonInputStyles,
      width: "343px",
      height: "44px",
    },
  },
  searchInput: {
    input: {
      ...commonInputStyles,
      width: "273px",
      height: "48px",
    },
  },
});
