import { Text } from "@mantine/core";
import { useTextStyles } from "../../styles/styles";
import { LogoProps } from "../Props";

export function LogoText({ children }: LogoProps) {
  const { classes } = useTextStyles();
  return (
    <Text className={classes.textLogo} ta="start">
      {children}
    </Text>
  );
}
