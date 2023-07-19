import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { theme } from "../styles/theme";
import {
  CustomButton,
  LogoText,
  CustomText,
  VBox,
  TextGroup,
  VGroup,
} from "../components/Components";

export default function Home() {
  const navigate = useNavigate();
  return (
    <MantineProvider withGlobalStyles theme={theme as MantineThemeOverride}>
      <VBox>
        <TextGroup>
          <LogoText>Weatherly .</LogoText>
          <CustomText>
            Your Trusted Source for Accurate
            <br />
            and Reliable Forecasts
          </CustomText>
        </TextGroup>

        <VGroup>
          <CustomButton
            type="button"
            onClick={async () => {
              navigate("/login");
            }}
          >
            Login
          </CustomButton>
          <CustomButton
            type="button"
            onClick={async () => {
              navigate("/register");
            }}
          >
            Register
          </CustomButton>
        </VGroup>
      </VBox>
    </MantineProvider>
  );
}
