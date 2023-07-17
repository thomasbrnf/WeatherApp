import { createStyles } from "@mantine/core";
import "typeface-abril-fatface";

export const useButtonStyles = createStyles({
  button: {
    backgroundColor: "#0D0D0D",
    color: "#E2E2E2",
    borderRadius: "12px",
    width: "343px",
    height: "44px",
    boxShadow: `0px 4px #AEADAD`,
    fontFamily: "Roboto, sans-serif",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "#993434",
    },
  },
  searchButton: {
    backgroundColor: "#C9C9C9",
    color: "#E2E2E2",
    borderRadius: "34px",
    width: "48px",
    height: "48px",
    boxShadow: `0px 2px #AEADAD`,
    padding: "12px",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "#BDBDBD",
    },
  },
});

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
    color: "#E2E2E2",
    fontFamily: "Roboto, sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
  },
});

export const useContainerStyles = createStyles({
  Vbox: {
    width: 470,
    position: "absolute",
    transition: "0.5s",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    flexDirection: "column",
    padding: "24px",
    borderRadius: "12px",
    background: "#E2E2E2",
    boxShadow: ` 0px 12px #C9C9C9`,
  },
  Hbox: {
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
    padding: "24px",
    paddingBottom: "34px",
    borderRadius: "12px",
    background: "#E2E2E2",
    transition: "0.5s",
    boxShadow: ` 0px 6px #C9C9C9`,
  },
  Dbox: {
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
    borderRadius: "12px",
    background: "#E2E2E2",
    transition: "0.5s",
    boxShadow: ` 0px 8px #C9C9C9`,
  },
});

export const useGroupStyles = createStyles({
  groupHeadings: {
    flexDirection: "column",
    padding: "24px",
    paddingBottom: "18px",
    paddingTop: "37px",
  },
  groupAction: {
    flexDirection: "column",
    padding: "24px",
    paddingTop: "0px",
    paddingBottom: "80px",
  },
  groupActionHorizontal: {
    paddingTop: "15px",
  },
  groupData: {
    height: 265,
    background: "#0D0D0D",
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

export const useInputStyles = createStyles({
  TextInput: {
    input: {
      backgroundColor: "#C9C9C9",
      border: "none",
      width: "343px",
      height: "44px",
      borderRadius: "12px",
      fontFamily: "Roboto, sans-serif",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "18px",
    },
  },
  SearchInput: {
    input: {
      backgroundColor: "#C9C9C9",
      border: "none",
      width: "273px",
      height: "48px",
      borderRadius: "12px",
      fontFamily: "Roboto, sans-serif",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "18px",
    },
  },
});
