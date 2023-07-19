import { Box } from "@mantine/core";
import { useContainerStyles } from "../../../styles/container.styles";
import { GeneralProps } from "../prop.types";

export function VBox({ children }: GeneralProps) {
  const { classes } = useContainerStyles();
  return <Box className={classes.Vbox}>{children}</Box>;
}

export function DBox({ children }: GeneralProps) {
  const { classes } = useContainerStyles();
  return <Box className={classes.Dbox}>{children}</Box>;
}

export function HBox({ children }: GeneralProps) {
  const { classes } = useContainerStyles();
  return <Box className={classes.Hbox}>{children}</Box>;
}
