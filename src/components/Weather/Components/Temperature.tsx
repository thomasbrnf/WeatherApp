import { Text, Group } from "@mantine/core";

export const Temperature = ({ temperature }: any) => {
  return (
    <Group
      sx={{
        position: "relative",
        top: -5,
      }}
    >
      <Text
        sx={{
          color: "#E2E2E2",
          fontFamily: "Roboto, sans-serif",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "70px",
        }}
      >
        {temperature}
      </Text>
      <Text
        sx={{
          position: "relative",
          top: "-20px",
          left: "-15px",
          color: "#E2E2E2",
          fontFamily: "Roboto, sans-serif",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "30px",
        }}
      >
        °C
      </Text>
    </Group>
  );
};
