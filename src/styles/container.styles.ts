import { createStyles } from "@mantine/core";
import { theme } from "./theme";

const boxShadow = theme.colors.white[1];

const baseBoxStyles = {
  padding: "24px",
  borderRadius: "12px",
  background: theme.colors.white[0],
};

export const useContainerStyles = createStyles({
  Vbox: {
    ...baseBoxStyles,
    width: 470,
    position: "absolute",
    transition: "0.5s",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    flexDirection: "column",
    boxShadow: `0px 12px ${boxShadow}`,
  },
  Hbox: {
    ...baseBoxStyles,
    width: 700,
    height: 125,
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "top",
    paddingBottom: "34px",
    boxShadow: ` 0px 6px ${boxShadow}`,
  },
  Dbox: {
    ...baseBoxStyles,
    width: 450,
    height: 425,
    position: "absolute",
    top: "55%",
    left: "50%",
    zIndex: -1,
    transform: "translate(-50%, -50%)",
    padding: "64px",
    paddingTop: "94px",
    paddingBottom: "34px",
    boxShadow: ` 0px 8px ${boxShadow}`,
  },
});
