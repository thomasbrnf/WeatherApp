interface MantineTheme {
  colorScheme: string;
  colors: {
    dark: [string];
    red: [string];
    white: [string, string, string, string];
  };
}

export const theme: MantineTheme = {
  colorScheme: "dark",
  colors: {
    dark: ["#0d0d0d"],
    red: ["#993434"],
    white: ["#E2E2E2", "#C9C9C9", "#BDBDBD", "#AEADAD"],
  },
};
