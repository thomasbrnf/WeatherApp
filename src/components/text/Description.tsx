import { Text } from "@mantine/core";
import { useTextStyles } from "../../styles/styles";
import { TextProps } from "../Props";

export function CustomText({ children }: TextProps) {
  const { classes } = useTextStyles();
  return (
    <Text className={classes.text} ta="center">
      {children}
    </Text>
  );
}
