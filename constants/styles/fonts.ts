type typeCustomFonts = "primaryRegular" | "primaryMedium" | "primaryBold";

export const FONTS: Record<typeCustomFonts, string> = {
  primaryRegular: require("../../assets/fonts/Outfit-Regular.ttf"),
  primaryMedium: require("../../assets/fonts/Outfit-Medium.ttf"),
  primaryBold: require("../../assets/fonts/Outfit-Bold.ttf"),
};

export const fontFamily: Record<typeCustomFonts, typeCustomFonts> = {
  primaryRegular: "primaryRegular",
  primaryMedium: "primaryMedium",
  primaryBold: "primaryBold",
};
