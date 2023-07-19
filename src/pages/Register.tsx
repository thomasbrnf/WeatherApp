import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import { useForm, isNotEmpty, matches } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { theme } from "../styles/theme";
import {
  CustomButton,
  LogoText,
  VBox,
  TextGroup,
  VGroup,
} from "../components/Components";
import { CustomInput } from "../components/action/CustomInput";

export default function Register() {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      name: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      name: isNotEmpty("Enter your name"),
      password: matches(
        /^[a-zA-Z0-9 !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+$/,
        "Passwords must contain English letters, symbols and numbers",
      ),
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });
  const handleRegister = async () => {
    form.validate();

    if (form.isValid()) {
      const { name, password } = form.values;
      const result = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          password: password,
        }),
      });
      const resultInJson = await result.json();
      console.log(resultInJson);
      navigate("/login");
    } else {
      return;
    }
  };
  return (
    <MantineProvider withGlobalStyles theme={theme as MantineThemeOverride}>
      <VBox>
        <TextGroup>
          <LogoText>Weatherly .</LogoText>
        </TextGroup>

        <VGroup>
          <CustomInput form={form} placeholder="Name" name="name" type="text" />
          <CustomInput
            form={form}
            placeholder="Password"
            name="password"
            type="password"
          />
          <CustomInput
            form={form}
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
          />

          <CustomButton
            type="submit"
            onClick={() => {
              handleRegister();
            }}
          >
            Register
          </CustomButton>
        </VGroup>
      </VBox>
    </MantineProvider>
  );
}
