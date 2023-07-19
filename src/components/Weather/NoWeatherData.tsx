import { Text } from "@mantine/core";
import { useTextStyles } from "../../styles/text.styles";
import { DBox, DGroup } from "../Components";

export const NoWeatherData = () => {
  const { classes } = useTextStyles();
  return (
    <DBox>
      <DGroup>
        <Text align="center" className={classes.errorText}>
          {" "}
          Oops! <br />
          Weatherly can't find
          <br />
          that location
        </Text>
      </DGroup>
    </DBox>
  );
};
