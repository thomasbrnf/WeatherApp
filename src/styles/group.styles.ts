import { createStyles } from "@mantine/core";
import { theme } from "./theme";

export const useGroupStyles = createStyles({
  groupHeadings: {
    flexDirection: "column",
    padding: "24px",
    paddingBottom: "18px",
    paddingTop: "37px",
  },
  VGroup: {
    flexDirection: "column",
    padding: "24px",
    paddingTop: "0px",
    paddingBottom: "80px",
  },
  HGroup: {
    paddingTop: "15px",
  },
  DGroup: {
    height: 265,
    background: theme.colors.dark[0],
    paddingTop: "0px",
    borderRadius: "12px",
  },
  weatherGroup: {
    flexDirection: "column",
    alignItems: "self-start",
    position: "relative",
    top: -20,
    right: -10,
  },
});
