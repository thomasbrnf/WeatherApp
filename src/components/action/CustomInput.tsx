import { TextInput } from "@mantine/core";
import { useInputStyles } from "../../styles/styles";
import { InputProps } from "../Props";

export function CustomInput({ placeholder, form, name, type }: InputProps) {
    const { classes } = useInputStyles();
    return (
       <TextInput type={type}
          placeholder={placeholder}  
          {...form.getInputProps(name)}
          className={classes.TextInput} 
       />
    )
  }

  export function CustomSearch({ placeholder, form, name, type }: InputProps) {
   const { classes } = useInputStyles();
   return (
      <TextInput type={type}
         placeholder={placeholder}  
         {...form.getInputProps(name)}
         className={classes.SearchInput} 
      />
   )
 }