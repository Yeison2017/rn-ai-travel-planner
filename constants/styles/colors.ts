/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const colors = {
  white: "#fff",
  primary: "#000",
  gray50: "#f6f6f6",
  gray100: "#e7e7e7",
  gray200: "#d1d1d1",
  gray300: "#b0b0b0",
  gray400: "#7d7d7d",
  gray500: "#6d6d6d",
  gray600: "#5d5d5d",
  gray700: "#4f4f4f",
  gray800: "#454545",
  gray900: "#3d3d3d",
  gray950: "#262626",

  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};
