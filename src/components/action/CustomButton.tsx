import { Button } from "@mantine/core";
import { useButtonStyles } from "../../styles/styles";
import { ButtonProps } from "../Props";

export function CustomButton({ children, onClick, type }: ButtonProps) {
  const { classes } = useButtonStyles();
  return (
    <Button type={type} className={classes.button} onClick={onClick}>
      {children}
    </Button>
  );
}

export function SearchButton({ children, onClick, type }: ButtonProps) {
  const { classes } = useButtonStyles();
  return (
    <Button type={type} className={classes.searchButton} onClick={onClick}>
      {children}
    </Button>
  );
}
