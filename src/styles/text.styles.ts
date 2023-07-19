import { createStyles } from "@mantine/core";
import { theme } from "./theme";
import "typeface-abril-fatface";

export const useTextStyles = createStyles({
  text: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "normal",
    fontSize: "18px",
  },
  textLogo: {
    fontFamily: "Abril Fatface",
    fontSize: "46px",
    fontStyle: "normal",
  },
  errorText: {
    position: "relative",
    top: 70,
    color: theme.colors.white[0],
    fontFamily: "Roboto, sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
  },
});
