import { MantineProvider, MantineThemeOverride} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { theme } from '../styles/theme';
import { CustomButton, LogoText, CustomText, CustomVerticalBox, HeadingsGroup, ActionGroup } from "../components/Components";

export default function Home() {
    const navigate = useNavigate();
  return (
      <MantineProvider withGlobalStyles theme={theme as MantineThemeOverride}>
        <CustomVerticalBox>

          <HeadingsGroup>
            <LogoText>Weatherly .</LogoText>
            <CustomText>Your Trusted Source for Accurate<br/>and Reliable Forecasts</CustomText>
          </HeadingsGroup>

          <ActionGroup>
          <CustomButton type='button'  onClick={async () => {
         navigate('/login');  }}>
          Login
          </CustomButton>
          <CustomButton type='button'  onClick={async () => {
        navigate('/register');  }}>
          Register
          </CustomButton>
        </ActionGroup>

      </CustomVerticalBox>
    </MantineProvider>
  );
}