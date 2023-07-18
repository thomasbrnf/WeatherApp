import { Box } from "@mantine/core";
import { useContainerStyles } from "../../styles/styles";
import { CustomBoxProps } from "../Props";

export function CustomVerticalBox({ children }: CustomBoxProps) {
  const { classes } = useContainerStyles();
  return <Box className={classes.Vbox}>{children}</Box>;
}

export function DynamicBox({ children }: CustomBoxProps) {
  const { classes } = useContainerStyles();
  return <Box className={classes.Dbox}>{children}</Box>;
}

export function CustomHorizontalBox({ children }: CustomBoxProps) {
  const { classes } = useContainerStyles();
  return <Box className={classes.Hbox}>{children}</Box>;
}
