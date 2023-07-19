import { Text } from "@mantine/core";
import { useTextStyles } from "../../styles/text.styles";
import { GeneralProps, LogoProps } from "../Props";

export function CustomText({ children }: GeneralProps) {
  const { classes } = useTextStyles();
  return (
    <Text className={classes.text} ta="center">
      {children}
    </Text>
  );
}

export function LogoText({ children }: LogoProps) {
  const { classes } = useTextStyles();
  return (
    <Text className={classes.textLogo} ta="start">
      {children}
    </Text>
  );
}
