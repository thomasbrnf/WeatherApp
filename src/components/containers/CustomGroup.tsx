import { Group } from "@mantine/core";
import { useGroupStyles } from "../../styles/group.styles";
import { GeneralProps } from "../Props";

export function VGroup({ children }: GeneralProps) {
  const { classes } = useGroupStyles();
  return (
    <Group className={classes.VGroup} position="center" spacing="28px">
      {children}
    </Group>
  );
}

export function HGroup({ children }: GeneralProps) {
  const { classes } = useGroupStyles();
  return (
    <Group
      className={classes.HGroup}
      align="top"
      position="center"
      spacing="15px"
    >
      {children}
    </Group>
  );
}

export function DGroup({ children }: GeneralProps) {
  const { classes } = useGroupStyles();
  return (
    <Group
      className={classes.DGroup}
      align="self-start"
      position="center"
      spacing="0px"
    >
      {children}
    </Group>
  );
}

export function TextGroup({ children }: GeneralProps) {
  const { classes } = useGroupStyles();
  return (
    <Group className={classes.groupHeadings} position="center" spacing="10px">
      {children}
    </Group>
  );
}
