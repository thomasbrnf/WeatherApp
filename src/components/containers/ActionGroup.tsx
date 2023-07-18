import { Group } from "@mantine/core";
import { useGroupStyles } from "../../styles/styles";
import { ActionProps } from "../Props";

export function ActionGroup({ children }: ActionProps) {
  const { classes } = useGroupStyles();
  return (
    <Group className={classes.groupAction} position="center" spacing="28px">
      {children}
    </Group>
  );
}

export function ActionHorizontalGroup({ children }: ActionProps) {
  const { classes } = useGroupStyles();
  return (
    <Group
      className={classes.groupActionHorizontal}
      align="top"
      position="center"
      spacing="15px"
    >
      {children}
    </Group>
  );
}

export function DataGroup({ children }: ActionProps) {
  const { classes } = useGroupStyles();
  return (
    <Group
      className={classes.groupData}
      align="self-start"
      position="center"
      spacing="0px"
    >
      {children}
    </Group>
  );
}
