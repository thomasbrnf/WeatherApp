import { TextInput } from "@mantine/core";
import { useInputStyles } from "../../../styles/input.styles";
import { InputProps } from "../prop.types";

export function CustomInput({ placeholder, form, name, type }: InputProps) {
  const { classes } = useInputStyles();
  return (
    <TextInput
      type={type}
      placeholder={placeholder}
      {...form.getInputProps(name)}
      className={classes.textInput}
    />
  );
}

export function SearchInput({ placeholder, form, name, type }: InputProps) {
  const { classes } = useInputStyles();
  return (
    <TextInput
      type={type}
      placeholder={placeholder}
      {...form.getInputProps(name)}
      className={classes.searchInput}
    />
  );
}
