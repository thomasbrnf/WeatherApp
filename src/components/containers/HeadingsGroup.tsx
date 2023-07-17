import { Group } from "@mantine/core";
import { useGroupStyles } from "../../styles/styles";
import { HeadingProps } from "../Props";

export function HeadingsGroup({ children }: HeadingProps) {
    const { classes } = useGroupStyles();
    return (
        <Group className={classes.groupHeadings} position='center' spacing='10px'>
            {children}
        </Group>
    )
}