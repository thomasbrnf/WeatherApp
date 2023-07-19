import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import { useForm, isNotEmpty, matches } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { theme } from "../styles/theme";
import {
  CustomButton,
  LogoText,
  VBox,
  VGroup,
  TextGroup,
  CustomInput,
} from "../components/ui";

export default function Login() {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      name: "",
      password: "",
    },
    validate: {
      name: isNotEmpty("Enter your name"),
      password: matches(
        /^[a-zA-Z0-9 !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+$/,
        "Passwords must contain English letters, symbols and numbers",
      ),
    },
  });
  const handleLogin = async () => {
    form.validate();

    if (form.isValid()) {
      const { name, password } = form.values;
      const result = await fetch("/login", {
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
      if (resultInJson === "Wrong password") {
        form.setErrors({
          password: "Wrong password",
        });
      } else {
        const token = resultInJson.token;
        document.cookie = `token=${token}; path=/`;

        navigate("/weather");
      }
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

          <CustomButton
            type="submit"
            onClick={() => {
              handleLogin();
            }}
          >
            Login
          </CustomButton>
        </VGroup>
      </VBox>
    </MantineProvider>
  );
}
