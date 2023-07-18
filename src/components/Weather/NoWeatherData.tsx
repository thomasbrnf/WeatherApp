import { Text } from "@mantine/core";
import { useTextStyles } from "../../styles/styles";
import { DynamicBox, DataGroup } from "../Components";

export const NoWeatherData = () => {
  const { classes } = useTextStyles();
  return (
    <DynamicBox>
      <DataGroup>
        <Text align="center" className={classes.errorText}>
          {" "}
          Oops! <br />
          Weatherly can't find
          <br />
          that location
        </Text>
      </DataGroup>
    </DynamicBox>
  );
};
