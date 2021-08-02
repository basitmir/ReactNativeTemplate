import { DefaultTheme } from "react-native-paper";

const Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: "#00342E",
    secondary: "#E8A17B",
    ternary: "#51A4F0",
    placeholder: "#B5BDB7",
    backdrop: "#FAD4D8",
    accent: "#1C5632",
    background: "#FFFFFF",
    surface: "#EDF1F0",
    text: "#1E1E1E",
    disabled: "rgba(0, 52, 46, 0.32)",
    error: "#FF0000",
    warning: "#E8A831",
    success: "#06E702",
    muted: "#989898",
    transparent: "transparent",
    black: "#000000",
    topTabOptionText: "#535353",
    lightAsh: "#C4C4C4",
    destruction: "#FF0707",
    separator: "#CFCFCF",
  },
  customColors: {
    disabledBorder: "#DADADA",
    disabledText: "#797979",
  },
  gradient: {
    glass: ["rgba(255, 255, 255, 0.22)", "rgba(255, 255, 255, 0.05)"],
  },
  fonts: {
    regular: {
      fontFamily: "Lato-Regular",
    },
    light: {
      fontFamily: "Lato-Light",
    },
    thin: {
      fontFamily: "Lato-Bold",
    },
  },
  fontStyle: {
    subtitle1: {
      fontSize: 16,
      lineHeight: 20,
    },
    subtitle2: {
      fontSize: 14,
      lineHeight: 18,
    },
    body1: {
      fontSize: 18,
      lineHeight: 24,
    },
    body2: {
      fontSize: 16,
      lineHeight: 20,
    },
    body3: {
      fontSize: 14,
      lineHeight: 18,
    },
    caption: {
      fontSize: 12,
      lineHeight: 16,
    },
    button: {
      fontSize: 16,
      lineHeight: 20,
    },
    miniButton: {
      fontSize: 12,
      lineHeight: 16,
    },
    label: {
      fontSize: 12,
      lineHeight: 16,
    },
    error: {
      fontSize: 10,
      lineHeight: 16,
    },
  },
};

export default Theme;
